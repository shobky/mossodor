import Image from "next/image";

export default function ShopBanner() {
  return (
    <div className="flex w-full h-[50vh] sm:h-[60svh] min-h-[175px] fixed top-0">
      <div className="w-full absolute 3xl:relative text-white text-center pb-[13svh] 3xl:p-0 bottom-6  grid place-content-center 3xl:bg-foreground leading-none   ">
        <h1 className="font-bold text-[calc(12px+5vw)]">THE LAST OFFER.</h1>
        <h2 className="text-base  sm:text-2xl text-left sm:text-center">
          Get 50% off on all products. Use code{" "}
          <span className="underline">SALE50</span>
        </h2>
      </div>
      <div className="3xl:bg-foreground w-full h-full  ">
        <Image
          alt="The last offer banner gets you 50% off  on all products. Use code SALE50."
          src={"/last-offer.png"}
          width={"800"}
          height={"400"}
          className=" aspect-video w-full h-full object-fit"
        />
      </div>
    </div>
  );
}
