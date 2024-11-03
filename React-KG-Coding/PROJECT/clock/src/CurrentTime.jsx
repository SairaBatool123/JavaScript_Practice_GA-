let CurrentTime = ()=>{
  let time = new Date();
  return ( 
  <div  class="fs-2">
    This is the Current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()} 
  </div>
);
}
export default CurrentTime;