
function App() {

  return (
    <>
      <section className="h-screen w-screen bg-[#19A2AE] relative flex items-center justify-center">
        <img className=" rotate-0 absolute top-[-500px] left-[-150px]" src="images/bg-pattern-top.svg" alt="" />
        <img className=" rotate-0 absolute bottom-[-550px] right-[-150px]" src="images/bg-pattern-bottom.svg" alt="" />

        <div className="h-[375px] w-[350px] bg-white z-10 rounded-xl overflow-hidden relative">
          <img className="w-full object-cover" src="/images/bg-pattern-card.svg" alt="" />
          <div className="h-[103px] w-[103px] rounded-full overflow-hidden absolute right-[35%] bottom-[50%] border-[10px] border-white"><img className="h-full w-full object-cover" src="/images/image-victor.jpg" alt="" /></div>
          <h2 className="text-center mt-[50px] font-bold">Victor Crest <span className="ml-[5px] text-gray-500 font-normal">26</span></h2>
          <p className="text-center mt-[7px] text-gray-500 font-extralight">London</p>
          <div className="h-[1px] w-full bg-gray-200 mt-[20px]"></div>
          <div className="flex justify-around mt-[20px] ">
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">80K</p>
              <p className="text-gray-400 text-sm">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">803K</p>
              <p className="text-gray-400 text-sm">Likes</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">1.4K</p>
              <p className="text-gray-400 text-sm">Photos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
