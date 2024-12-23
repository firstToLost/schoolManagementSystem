import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Academic from "./components/dashboard/academic/Academic";
import Term from "./components/dashboard/academic/Term.jsx";
import Grade from "./components/dashboard/academic/Grade";

import AcademicYear from "./components/dashboard/academic/AcademicYear.jsx";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import Departments from "./pages/Departments";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import useScrollToTop from "./hooks/useScrollToTop";
import { FormProvider } from "./contexts/FormContext";
import AOS from "aos";
import "aos/dist/aos.css";
import PersistentLogin from "./components/PersistentLogin";
import Dashboard from "./pages/Dashboard";
import Upload from "./components/dashboard/fileupload/Upload.jsx";

import FormUpload from "./components/dashboard/fileupload/FormUpload.jsx";
import DashboardReport from "./components/DashboardReport";
import DashboardHome from "./components/DashboardHome";
import DashboardCheckPayment from "./components/DashboardCheckPayment";

import RequireAuth from "./components/RequireAuth";
import UploadForm from "./components/UploadForm";

import Tunnel from "./components/Tunnel";
import OurStaff from "./pages/OurStaff";

import Result from "./components/dashboard/result/Result";
import ResultHome from "./components/dashboard/result/ResultHome";
import UploadManually from "./components/dashboard/result/UploadManually";
import UploadFile from "./components/dashboard/result/UploadFile";
import ResultModify from "./components/dashboard/result/ResultModify";

import ScheduleNew from "./components/dashboard/schedule/ScheduleNew";
import Schedule from "./components/dashboard/schedule/Schedule";

import Assessments from "./components/dashboard/assessment/Assessments";
import Assessment from "./components/dashboard/assessment/Assessment";
import ViewAssessment from "./components/dashboard/assessment/ViewAssessment";

import AddAssessment from "./components/dashboard/assessment/AddAssessment";

import StudentsHome from "./components/dashboard/students/StudentsHome";
import StudentProfile from "./components/dashboard/students/StudentProfile";
import Students from "./components/dashboard/students/Students";

import Attendance from "./components/dashboard/attendance/Attendance";
import FillAttendance from "./components/dashboard/attendance/FillAttendance";

import Events from "./components/dashboard/events/Events";

import Registration from "./components/dashboard/registration/Registration";

import AddRegistration from "./components/dashboard/registration/AddRegistration";

import PendingRegistration from "./components/dashboard/registration/PendingRegistration.jsx";
import Registrations from "./components/dashboard/registration/Registrations";
import Section from "./components/dashboard/class/Section";
import Class from "./components/dashboard/class/Class";

import Unauthorized from "./components/Unauthorized";
import ModifyResult from "./components/dashboard/result/ModifyResult";
import TeacherAttendance from "./components/dashboard/teachers/TeacherAttendance.jsx";
import Teachers from "./components/dashboard/teachers/Teachers";
import AddTeachers from "./components/dashboard/teachers/AddTeachers";
import TeacherProfile from "./components/dashboard/teachers/TeacherProfile";

import Pay from "./components/dashboard/pay/Pay.jsx";
import Print from "./components/dashboard/print/Print.jsx";
export default function App() {
  useScrollToTop();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <FormProvider>
      <Routes>
        <Route path="/" element={<Tunnel />}>
          <Route element={<PersistentLogin />}>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="clubs" element={<Clubs />} />
              <Route
                path="departments"
                element={<Departments />}
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="staff" element={<OurStaff />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route
              element={
                <RequireAuth
                  allowedRoles={["admin", "teacher"]}
                />
              }
            >
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="" element={<DashboardHome />} />

                <Route path="schedule" element={<Tunnel />}>
                  <Route path="" element={<Schedule />} />
                  <Route
                    path="new"
                    element={<ScheduleNew />}
                  />
                </Route>

                <Route path="students" element={<Tunnel />}>
                  <Route path="" element={<Students />} />
                  <Route
                    path="profile"
                    element={<StudentProfile />}
                  />
                </Route>
                <Route path="academic" element={<Tunnel />}>
                  <Route path="" element={<Academic />} />
                  <Route
                    path="edit"
                    element={<AcademicYear />}
                  >
                    <Route path="" element={<Term />} />
                    <Route path="term" element={<Term />} />
                    <Route
                      path="grade"
                      element={<Grade />}
                    />
                  </Route>
                </Route>
                <Route path="teachers" element={<Tunnel />}>
                  <Route path="" element={<Teachers />} />
                  <Route
                    path="add"
                    element={<AddTeachers />}
                  />
                  <Route
                    path="profile"
                    element={<TeacherProfile />}
                  />

                  <Route
                    path="attendance"
                    element={<TeacherAttendance />}
                  />
                </Route>
                <Route path="class" element={<Tunnel />}>
                  <Route path="" element={<Class />} />
                  <Route
                    path="section"
                    element={<Section />}
                  />
                </Route>

                <Route
                  path="check-payment"
                  element={<DashboardCheckPayment />}
                />
                <Route path="pay" element={<Pay />} />
                <Route path="result" element={<Result />}>
                  <Route path="" element={<ResultHome />} />

                  <Route path="upload" element={<Tunnel />}>
                    <Route
                      path=""
                      element={<UploadForm />}
                    />
                    <Route
                      path="upload"
                      element={<UploadFile />}
                    />
                  </Route>
                  <Route path="manually" element={<Tunnel />}>
                    <Route
                      path=""
                      element={<UploadForm />}
                    />
                    <Route
                      path="upload"
                      element={<UploadManually />}
                    />
                  </Route>
                  <Route
                    path="modify"
                    element={<Tunnel />}
                  >
                    <Route
                      path=""
                      element={<ModifyResult />}
                    />
                    <Route
                      path="upload"
                      element={<UploadManually />}
                    />
                  </Route>
                </Route>

                <Route path="assessment" element={<Tunnel />}>
                  <Route path="" element={<Assessments />} />
                  <Route
                    path="upload"
                    element={<Assessment />}
                  />

                  <Route
                    path="add"
                    element={<AddAssessment />}
                  />
                  <Route
                    path="view"
                    element={<ViewAssessment />}
                  />
                  <Route
                    path="edit"
                    element={<Assessment />}
                  />
                </Route>

                <Route path="upload" element={<Tunnel />}>
                  <Route path="" element={<Upload />} />

                  <Route
                    path="add"
                    element={<FormUpload />}
                  />
                </Route>

                <Route path="attendance" element={<Tunnel />}>
                  <Route path="" element={<Attendance />} />
                  <Route
                    path="u"
                    element={<FillAttendance />}
                  />
                </Route>

                <Route path="events" element={<Tunnel />}>
                  <Route path="" element={<Events />} />
                </Route>

                <Route
                  path="registration"
                  element={<Registration />}
                >
                  <Route
                    path="create"
                    element={<AddRegistration />}
                  />
                  <Route
                    path="view"
                    element={<Registrations />}
                  />
                  <Route
                    path="pending"
                    element={<PendingRegistration />}
                  />
                </Route>

                <Route
                  path="report"
                  element={<DashboardReport />}
                />
                <Route
                  path="print"
                  element={<Print />}
                />

              </Route>
            </Route>
          </Route>
        </Route>


        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </FormProvider>
  );
}
