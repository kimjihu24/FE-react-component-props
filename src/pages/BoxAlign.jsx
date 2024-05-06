import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";

const BoxAlign = () => {

  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];
  // circleColorArr.map(
  //   (color)=>{
  //     console.log(color)

  //   }
  // )

  return (
    <div>
      <Box text="빨강" boxColor="red"/>
      <Box text="파랑" boxColor="blue"/>
      <Box text="초록" boxColor="green"/>
      <Box text="분홍" boxColor="pink"/>
      

      {circleColorArr.map(
        (color)=>
          <Circle circleColor={color}></Circle>

      )}
      {/* <Circle></Circle> */}
    </div>
  );
};

export default BoxAlign;
