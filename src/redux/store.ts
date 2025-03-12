import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";

export const store = configureStore({
    reducer: {
        student: studentReducer,
    },
});

// store.getState(): Trả về trạng thái hiện tại của store
// ReturnType<typeof store.getState>: Lấy kiểu dữ liệu của store.getState().
// RootState chứa toàn bộ cấu trúc state của Redux store.

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// store.dispatch: Là hàm dùng để gửi action lên Redux store.
// typeof store.dispatch: Lấy kiểu dữ liệu của dispatch để dùng trong TypeScript.

