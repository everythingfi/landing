const SectionHeading = ({
	title,
	text,
	description,
	ClassSpan="dream-dots justify-content-center",
	ClassSpanTitle=""
}) => {

  return (
		<div className="section-heading text-center">
			<div className={ClassSpan} data-aos="fade-up">
					<span className={ClassSpanTitle}>{title}</span>
			</div>
				<h2 data-aos="fade-up">{text}</h2>
				<p data-aos="fade-up">{description}</p>
		</div>
  );
}

export default SectionHeading;