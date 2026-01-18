import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import NotFound from "./pages/NotFound.jsx";
import Welcome from "./pages/Welcome.jsx";
import Quiz from "./pages/Quiz.jsx";
import Reviews from "./pages/Reviews.jsx";
import UserForm from "./pages/UserForm.jsx";
import Results from "./pages/Results.jsx";
import YourScore from "./pages/YourScore.jsx";
import CourseIntro from "./pages/CourseIntro.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import CTAUrgency from "./pages/CTAUrgency.jsx";
import "./index.css";
import CourseDetail from "./pages/CourseDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "email",
        element: <UserForm />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "score",
        element: <YourScore />,
      },
      {
        path: 'course-intro',
        element: <CourseIntro />,
      },
      {
        path: 'course-detail',
        element: <CourseDetail />,
      },
      {
        path: 'testimonials',
        element: <Testimonials />,
      },
      {
        path: 'buy-now',
        element: <CTAUrgency />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
