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
      {props.children}
      {props.modal}
      <Footer />
    </div>
  );
}
