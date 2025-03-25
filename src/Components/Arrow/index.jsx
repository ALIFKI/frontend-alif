import { ArrowLeft, ArrowRight } from "lucide-react";

function ArrowLeftComponent(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`bg-white h-10 w-10 left-0 -bottom-12 lg:-left-8 md:top-[50%] md:h-10 md:w-10 shadow-sm rounded-full md:-left-[20px] flex justify-center items-center`}
      onClick={onClick}
      style={{
        position: "absolute",
        zIndex: 200,
        // top: "50%",
      }}
    >
      <ArrowLeft></ArrowLeft>
    </div>
  );
}

function ArrowRightComponent(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`bg-white h-10 w-10 left-12 -bottom-12 md:left-auto lg:-right-8 md:top-[50%] md:h-10 md:w-10 shadow-sm rounded-full md:-right-[20px] flex justify-center items-center`}
      onClick={onClick}
      style={{
        position: "absolute",
        zIndex: 200,
        // top: "50%",
      }}
    >
      <ArrowRight></ArrowRight>
    </div>
  );
}

export { ArrowLeftComponent, ArrowRightComponent };
