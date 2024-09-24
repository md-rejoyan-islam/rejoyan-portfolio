export default function ColorMovingButton({ children }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-block p-[1px] rounded-xl animate-gradient">
        <div className="rounded-xl  transition-all duration-300">
          {children}
        </div>
      </div>
    </div>
  );
}
