export default function Hero({ children }) {
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="jumbo absolute -inset-[10px] opacity-50" />
      </div>
      {children}
    </>
  );
}
