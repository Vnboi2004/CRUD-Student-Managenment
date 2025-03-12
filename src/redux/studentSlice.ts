import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Type Student
interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
};

// Type State
interface StudentState {
    students: Student[];
};

// Khởi tạo dữ liệu cho slice
const initialState: StudentState = {
    students: [],
};

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        // Thêm sinh viên vào slice
        addStudent: (state, action: PayloadAction<Student>) => {
            state.students.push(action.payload); // Thêm sinh viên mới vào cuối bảng.
        },

        // Cập nhật sinh viên trong slice
        updateStudent: (state, action: PayloadAction<Student>) => { 
            // Duyệt qua toàn bộ dữ liệu để tìm id
            const index = state.students.findIndex((s) => s.id === action.payload.id);

            if (index !== -1) {
                // Gán dữ liệu mới 
                state.students[index] = action.payload;
            }
        },

        // Xóa sinh viên ra khỏi slice
        deleteStudent: (state, action: PayloadAction<number>) => {
            state.students = state.students.filter((s) => s.id !== action.payload);
        },
    },
});


export const {
    addStudent,
    updateStudent,
    deleteStudent,
} = studentSlice.actions;


export default studentSlice.reducer;