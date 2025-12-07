"use client";

import { useCurrentAccount, useSignAndExecuteTransaction, useIotaClientQuery } from "@iota/dapp-kit";
import { Button, Container, Heading, Text, TextField, Card, Badge, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { Transaction } from "@iota/iota-sdk/transactions";
import { PACKAGE_ID, MODULE_NAME } from "@/lib/config";
import { TrashIcon, CheckIcon, PlusIcon } from "@radix-ui/react-icons";

const SampleIntegration = () => {
  const currentAccount = useCurrentAccount();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const [taskContent, setTaskContent] = useState("");

  // 1. QUERY DATA
  const { data: tasksData, refetch, isPending } = useIotaClientQuery(
    "getOwnedObjects",
    {
      owner: currentAccount?.address as string,
      filter: { StructType: `${PACKAGE_ID}::${MODULE_NAME}::Task` },
      options: { showContent: true },
    },
    {
      enabled: !!currentAccount,
      refetchInterval: 3000, 
    }
  );

  // --- HÀM XỬ LÝ TRANSACTION RIÊNG BIỆT (Để tránh lỗi IndexOutOfBounds) ---

  // 1. Tạo Task
  const createNewTask = () => {
    if (!taskContent) return;
    const tx = new Transaction();
    
    tx.moveCall({
      target: `${PACKAGE_ID}::${MODULE_NAME}::create_task`,
      arguments: [tx.pure.string(taskContent)],
    });

    executeTx(tx, "Đã thêm công việc thành công!", () => setTaskContent(""));
  };

  // 2. Hoàn thành Task
  const completeTask = (objectId: string) => {
    const tx = new Transaction();
    
    tx.moveCall({
      target: `${PACKAGE_ID}::${MODULE_NAME}::complete_task`,
      arguments: [tx.object(objectId)], // tx.object PHẢI nằm trong cùng 1 instance tx
    });

    executeTx(tx, "Đã hoàn thành công việc!");
  };

  // 3. Xóa Task
  const deleteTask = (objectId: string) => {
    const tx = new Transaction();
    
    tx.moveCall({
      target: `${PACKAGE_ID}::${MODULE_NAME}::delete_task`,
      arguments: [tx.object(objectId)],
    });

    executeTx(tx, "Đã xóa công việc!");
  };

  // Hàm helper để ký và gửi (chỉ dùng để rút gọn đoạn sign)
  const executeTx = (tx: Transaction, successMsg: string, callback?: () => void) => {
    signAndExecuteTransaction(
      { transaction: tx },
      {
        onSuccess: () => {
          alert(successMsg);
          callback?.();
          setTimeout(() => refetch(), 1000);
        },
        onError: (err) => {
          console.error(err);
          alert("Lỗi: " + err.message);
        },
      }
    );
  };

  // --- GIAO DIỆN ---

  if (!currentAccount) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 text-black">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <Heading size="8" className="mb-4 text-blue-600">📝 To-Do List</Heading>
          <Text size="4" className="text-gray-600">Kết nối ví để quản lý công việc</Text>
        </div>
      </div>
    );
  }

  const tasks = tasksData?.data?.map((item: any) => {
    const fields = item.data?.content?.fields;
    return {
      id: item.data?.objectId,
      content: fields?.content,
      is_done: fields?.is_done,
    };
  }) || [];

  return (
    // FIX UI: Thêm text-gray-900 để ép chữ màu đen, bg-white để ép nền trắng
    <div className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <Container size="3">
        <Heading size="8" align="center" className="mb-8 text-blue-700 drop-shadow-sm">
           Quản Lý Công Việc (On-Chain)
        </Heading>

        {/* INPUT FORM - Đã sửa lại màu sắc độ tương phản cao */}
        <div className="mb-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          <Heading size="4" className="mb-4 text-gray-800 font-bold">
            Thêm công việc mới
          </Heading>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              {/* Dùng thẻ input thường thay vì TextField của Radix để dễ chỉnh màu */}
              <input 
                type="text"
                placeholder="Ví dụ: Đi chợ, Học Move..." 
                value={taskContent}
                onChange={(e) => setTaskContent(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            
            {/* Nút bấm chỉnh màu cứng: Nền xanh đậm, chữ trắng */}
            <button 
              onClick={createNewTask} 
              disabled={!taskContent} 
              className={`
                px-6 py-3 rounded-lg font-bold text-white shadow-md transition-all flex items-center justify-center
                ${!taskContent ? 'bg-red-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95 cursor-pointer'}
              `}
            >
              <PlusIcon className="w-5 h-5 mr-2" /> 
              THÊM NGAY
            </button>
          </div>
        </div>

        {/* TASK LIST - FIX UI: Card nền trắng, chữ đen */}
        <Heading size="4" mb="4" className="text-gray-800 border-b pb-2">
          Danh sách công việc ({tasks.length})
        </Heading>
        
        {isPending ? (
          <Text className="text-gray-500 italic">Đang tải dữ liệu...</Text>
        ) : tasks.length === 0 ? (
          <div className="text-center p-8 bg-white rounded border border-dashed border-gray-300">
             <Text className="text-gray-500">Chưa có công việc nào. Hãy tạo cái đầu tiên!</Text>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-all bg-white border border-gray-200">
                <Flex justify="between" align="center" gap="3">
                  <Flex gap="3" align="center" className="overflow-hidden">
                    <Badge color={task.is_done ? "green" : "orange"} size="2" variant="solid">
                      {task.is_done ? "Hoàn thành" : "Đang làm"}
                    </Badge>
                    
                    <Text 
                      size="3" 
                      weight="medium"
                      className={`truncate ${task.is_done ? "line-through text-gray-400" : "text-gray-800"}`}
                    >
                      {task.content}
                    </Text>
                  </Flex>

                  <Flex gap="2" shrink="0">
                    {!task.is_done && (
                      <Button color="green" variant="soft" onClick={() => completeTask(task.id)} className="cursor-pointer">
                        <CheckIcon /> <span className="hidden sm:inline">Xong</span>
                      </Button>
                    )}
                    <Button color="red" variant="soft" onClick={() => deleteTask(task.id)} className="cursor-pointer">
                      <TrashIcon /> <span className="hidden sm:inline">Xóa</span>
                    </Button>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default SampleIntegration;