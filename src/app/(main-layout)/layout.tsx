import Footer from "@/components/page-layout/footer";
import Header from "@/components/page-layout/header";
import { HeaderProvider } from "@/components/page-layout/header/header-provider";
import { Suspense } from "react";

export default function MainLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="">
      <Suspense>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
      </Suspense>

      <div className="min-h-[70vh]">
        {props.children}
        {props.modal}
      </div>
      <Footer />
    </div>
  );
}
