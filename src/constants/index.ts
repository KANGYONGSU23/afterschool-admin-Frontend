export interface InputContainerDataType {
  title: string;
  placeholder: string;
  register: string;
  detail?: boolean;
  important?: boolean
}

export const SignupInputData: InputContainerDataType[] = [
  {
    title: "담임 선생님",
    register: "teacher name",
    placeholder: "선생님을 입력해 주세요.",
    important: true
  },
  {
    title: "방과후 안내",
    register: "info",
    placeholder: "",
  },
  {
    title: "방과후 장소",
    register: "place",
    placeholder: "방과후를 진행할 장소를 입력해 주세요.",
    important: true
  },
  {
    title: "신청학생",
    register: "student",
    detail: true,
    placeholder: "",
  },
];