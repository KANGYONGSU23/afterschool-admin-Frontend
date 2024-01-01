import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AfterSchoolClassCreate,
  AfterSchoolClassDetail,
  AfterSchoolClassList,
  AfterSchoolClassManage,
  AfterSchoolCourseCreate,
  AfterSchoolCourseDetail,
  AfterSchoolCourseList,
  AfterSchoolCourseManage,
  Login,
  NotFound,
} from "../pages";
import ServiceLayout from "../components/services/layouts";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />

        <Route element={<ServiceLayout />}>
          <Route path="services">
            <Route path="after-school-class">
              <Route path="index" element={<AfterSchoolClassList />} />
              <Route path="create" element={<AfterSchoolClassCreate />} />
              <Route path=":id" element={<AfterSchoolClassDetail />} />
            </Route>

            <Route path="after-school-course">
              <Route index element={<AfterSchoolCourseList />} />
              <Route path="create" element={<AfterSchoolCourseCreate />} />
              <Route path=":id" element={<AfterSchoolCourseDetail />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
