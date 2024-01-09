export default function Button({
  disabled,
  action,
}: {
  disabled: boolean;
  action: () => void;
}) {
  const buttonClass = disabled
    ? " bg-[#E8E8E8] text-[#909090]"
    : " bg-[#FBBF24] hover:bg-[#FBBF24]/[0.60] text-[#F7F3E3] hover:text-[#FFFFFF]";

  const textButton = disabled ? "no disponible" : "jugar ahora";

  return (
    <button disabled={disabled} onClick={action} className={"text-base font-bold uppercase px-5 py-3 rounded-xl" + buttonClass}> 
      {textButton}
    </button>
  );
}
