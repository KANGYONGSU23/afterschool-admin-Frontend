import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  AfterSchoolClassCreate,
  AfterSchoolClassDetail,
  AfterSchoolClassList,
  AfterSchoolCourseCreate,
  AfterSchoolCourseDetail,
  AfterSchoolCourseList,
  Login,
  NotFound,
} from "../pages";
import Header from "../components/header";
import AfterSchoolApplication from "../pages/service/afterSchool application/AfterSchoolApplication";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />

        <Route path="services" element={< Header/>}>
          <Route path="after-school-class">
            <Route path="index" element={<AfterSchoolClassList />} />
            <Route path="create" element={<AfterSchoolClassCreate />} />
            <Route path="manage" element={<AfterSchoolClassManage />} />
            <Route path=":id" element={<AfterSchoolClassDetail />} />
          </Route>

            <Route path="after-school-course">
              <Route index element={<AfterSchoolCourseList />} />
              <Route path="create" element={<AfterSchoolCourseCreate />} />
              <Route path=":id" element={<AfterSchoolCourseDetail />} />
            </Route>
          </Route>

          <Route path="after-school-application">
            <Route path="application" element={<AfterSchoolApplication/>}/>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
