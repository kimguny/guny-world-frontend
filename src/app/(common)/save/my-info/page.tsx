import dynamic from "next/dynamic";
const MyInfoForm = dynamic(() => import("@/components/my-info/MyInfoForm"));

export default function MyInfo() {
  return (
    <>
      <div>
        <MyInfoForm />
      </div>
    </>
  );
}
