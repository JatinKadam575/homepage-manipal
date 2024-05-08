import { Button } from "@/components/ui/button"

export function ButtonDemo({ children, buttonStyle}) {

    const buttonClasses = `px-4 py-2 rounded-xl shadow  ${buttonStyle}`;

  return <Button className={buttonClasses}>{children}</Button>
}
