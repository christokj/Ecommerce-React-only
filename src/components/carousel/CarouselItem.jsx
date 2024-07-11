
const CarouselItem = ({ item }) => {
  return (
    <div >
      <img src={item.image} alt={item.caption} />
      <p>{item.caption}</p>
    </div>
  );
}

export default CarouselItem;