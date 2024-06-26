import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function useOpenedDrawer(
  options: {
    defaultOpen: boolean;
    closeOnBack?: boolean;
  } = {
    defaultOpen: false,
    closeOnBack: false,
  }
) {
  const [open, setOpen] = useState(options.defaultOpen);
  const router = useRouter();

  useLayoutEffect(() => {
    const bodyStyle = document.body.style;

    if (open) {
      bodyStyle.overflow = "hidden";
    } else {
      bodyStyle.overflow = "unset";

      if (options.closeOnBack) {
        router.back();
      }
    }
  }, [open, options.closeOnBack, router]);

  return { open, setOpen };
}
