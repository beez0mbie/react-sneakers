export const Info = ({ title, description, image, handleInfoState, emoji }) => {
  return (
    <div className='info'>
      {image ? (
        <img
          className='infoImage'
          src={image}
          alt='infoImage'
        />
      ) : (
        <div className='emoji'>{emoji}</div>
      )}
      <div>
        <h3 className='eptyCartTitle'>{title}</h3>
        <p className='eptyCartText'>{description}</p>
      </div>
      <button
        onClick={handleInfoState}
        className='greenButton'
      >
        Вернуться назад
        <img
          src='img/arrow-left.svg'
          alt='Arrow'
          className='arrowImg'
        />
      </button>
    </div>
  );
};
