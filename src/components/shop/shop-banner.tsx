import Image from "next/image";

export default function ShopBanner() {
  return (
    <div className="flex w-full h-[40vh] sm:h-[60svh] 2xl:h-[50vh] min-h-[175px] fixed top-0">
      <div className="w-full absolute 3xl:relative text-white text-center pb-[13svh] 3xl:p-0 bottom-4 sm:bottom-8  grid place-content-center 3xl:bg-foreground leading-none   ">
        <h1 className="font-bold text-[calc(12px+5vw)] relative">
          THE LAST <span className="z-10 relative">OFFER</span>.
          {/* <span className="line-through absolute -right-2 -top-2 rotate-[10deg] text-[calc(8px+2vw)] opacity-70 brightness-125 font-medium text-white z-0">
            SUPPER
          </span> */}
        </h1>
        <h2 className="text-base  sm:text-2xl text-center">
          Up to 55% on selected products. Use code{" "}
          <span className="underline">SALE50</span>
        </h2>
      </div>
      <div className="3xl:bg-foreground w-full h-full  ">
        <Image
          alt="The last offer banner gets you 50% off  on all products. Use code SALE50."
          src={"/last-offer.png"}
          width={"1200"}
          height={"600"}
          priority
          loading="eager"
          className=" aspect-video w-full h-full object-fit"
        />
      </div>
    </div>
  );
}
