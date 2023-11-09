interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.ceil(rating);
  
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let star;
    if (i <= fullStars) {
      star = '★';
    } else {
      star = '☆';
    }
    stars.push(
      <span
        key={i}
        className={`text-2xl ${i <= fullStars ? 'text-blue-500' : 'text-blue-400'}`}
      >
        {star}
      </span>
    );
  }

  return <div className="flex items-center">{stars}</div>;
};

export default Rating;
