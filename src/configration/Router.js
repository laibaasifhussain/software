import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "../screens/AdminScreen/AdminDashboard";
import InstituteForm from "../screens/AdminScreen/InstituteForm";
import Payment from "../screens/AdminScreen/Payment";
import AddQuiz from "../screens/Institutescreens/AddQuiz";
import CourseForm from "../screens/Institutescreens/CourseForm";
import CourseList from "../screens/Institutescreens/CourseList";
import InstituteDashboard from "../screens/Institutescreens/InstituteDashboard";
import Quiz from "../screens/Institutescreens/Quiz";
import RegistrationControl from "../screens/Institutescreens/RegistrationControl";
import StudentForm from "../screens/Institutescreens/StudentForm";
import StudentList from "../screens/Institutescreens/StudentList";
import StudentDetails from "../screens/Institutescreens/StudentsDetails";
import Login from "../screens/Login";
import InstituteList from "../screens/AdminScreen/InstituteList";
import StudentDashboard from "../screens/StudentScreens/StudentDashboard";
import CourseRegistration from "../screens/CourseRegistration";
import Result from "../screens/Result";
import Resultinstitute from "../screens/Institutescreens/Resultinstitute";
import CourseSubmission from "../screens/CourseSubmission";

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="adminportal/*" element={<AdminDashboard />} />
                    <Route path="/" element={<Login />} />
                    <Route path="institutedashboard/*" element={<InstituteDashboard />} />
                    <Route path="studentdashboard/*" element={<StudentDashboard />} />
                    <Route path="courseregistration" element={<CourseRegistration />} />
                    <Route path="result" element={<Result />} />
                    <Route path="formsubmit" element={<CourseSubmission />} />
                    <Route path="courseform" element={<CourseForm />} />
                    <Route path="studentform" element={<StudentForm />} />
                    <Route path="studentdetails" element={<StudentDetails />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;