export default function AdSenseSlot({ id }: { id: string }) {
  return (
    <div className="ad-container" id={`ad-${id}`}>
      {/* Google AdSense Script would go here */}
    </div>
  );
}
