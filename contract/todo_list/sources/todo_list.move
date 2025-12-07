module todo_list::todo_list {
    use std::string::{Self, String};

    // SỬA LỖI: Thêm 'public' trước struct
    public struct Task has key, store {
        id: UID,
        content: String,
        is_done: bool
    }

    // Hàm tạo task
    public entry fun create_task(content_bytes: vector<u8>, ctx: &mut TxContext) {
        let task = Task {
            id: object::new(ctx),
            content: string::utf8(content_bytes),
            is_done: false,
        };
        transfer::transfer(task, ctx.sender());
    }

    // Hàm hoàn thành task
    public entry fun complete_task(task: &mut Task) {
        task.is_done = true;
    }

    // Hàm xóa task
    public entry fun delete_task(task: Task) {
        let Task { id, content: _, is_done: _ } = task;
        object::delete(id);
    }
}