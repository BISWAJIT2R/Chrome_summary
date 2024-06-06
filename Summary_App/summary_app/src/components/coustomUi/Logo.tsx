
const Logo = ({video}) => {
  return (
    <div className=" flex overflow-hidden w-full relative items-center justify-center pointer-events-none">
     <section className=" overflow-hidden bg-red w-1/2 h-12 rounded-full object-cover">
       <video muted autoPlay loop className="relative w-full">
        <source src={video}/>
       </video>
     </section>
    </div>
  );
};

export default Logo;
