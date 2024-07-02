import Footer from "@/components/page-layout/footer";
import Header from "@/components/page-layout/header";
import { HeaderProvider } from "@/components/page-layout/header/header-provider";

export default function MainLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="">
      <HeaderProvider>
      <Header />
      </HeaderProvider>
      <div className="min-h-[70vh]">
      {props.children}
      {props.modal}
      </div>
      <Footer />
    </div>
  );
}
