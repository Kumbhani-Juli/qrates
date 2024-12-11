import React from "react";
import { Link } from "react-router-dom";
import sectionImg1 from "../../assets/images/Artist/artistintro1.avif";
import sectionImg2 from "../../assets/images/Artist/artistintro2.avif";
import sectionImg3 from "../../assets/images/Artist/artistintro3.avif";
import sectionImg4 from "../../assets/images/Artist/artistintro4.avif";
import sectionImg5 from "../../assets/images/Artist/artistintro5.avif";
import sectionImg6 from "../../assets/images/Artist/artistintro6.avif";
import "../../assets/styles/artist/artsitmiddlesection.css";
const ArtistMiddleSection = () => {
	const sectionData = [
		{
			leftSectionData: {
				mainTitle: "Express your work on Qrates",
				contentData: [
					{
						contentTitle: "Qrates studio",
						content:
							"Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more.",
					},
				],
			},
			rightSectionData: {
				mainTitle: "Over 120,000 customization possibilities 3D Visualizer",
				contentData: [
					{
						content:
							"Choose from vinyl or cassette, each with a wide range of options including colors, packaging, obi strips, download cards, etc. There are over 120,000 variations of colors and specs for vinyl and cassette that can be customized in the Qrates Studio.",
					},
				],
				sectionImg: sectionImg1,
			},
		},
		{
			leftSectionData: {
				mainTitle: "Start a Qrates page,confirm and pay for production costs.",
				contentData: [
					{
						contentTitle: "Pay up front? Crowdfunding?",
						content:
							"Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans.",
					},
					{
						contentTitle: "Qrates page and Artist page",
						content:
							"The Qrates page is your storefront on Qrates to sell your music. The Artist page is your profile page. Upload your images to the template provided and fill in the form to set it up.",
					},
				],
				sectionImg: sectionImg2,
			},
			rightSectionData: {
				mainTitle: "We support a wide range of artists' needs",
				contentData: [
					{
						contentTitle: "Small production minimums",
						content:
							"Vinyl records can be made from 100 copies, and cassette tapes from 50 copies.",
					},
					{
						contentTitle: "Select the payment option",
						content:
							"You can pay for the production of your product in advance and begin the production process immediately. We also have a pre-order function, which allows you to take orders during production until completion, and the crowdfunding method, which allows you to collect orders in advance and then begin the manufacturing process. If you don't want to pay for the production costs upfront, or if you want to collect orders from your fans before deciding on the final number of pieces to be produced, try crowdfunding. No risk, no waste.",
					},
					{
						contentTitle:
							"Easily customizable your Qrates page and artist page",
						content:
							"Qrates provides easy-to-setup templates for the Qrates page and the artist profile page. The Qrates page for selling your music can be set up to include audio samples, embedded videos, and comments from fans, making it a great promotional tool.",
					},
				],
			},
		},
		{
			leftSectionData: {
				mainTitle: "Collect orders from fans",
				contentData: [
					{
						content:
							"Share your Qrates page and collect orders from your fans. A variety of tools are also available to promote your music.",
					},
				],
			},
			rightSectionData: {
				mainTitle: "Wholesale distribution network",
				contentData: [
					{
						contentTitle:
							"You can sell wholesale directly to record stores worldwide",
						content:
							"Simply start selling on your Qrates page and receive orders from over 150 record stores and distributors worldwide that we partner with.",
					},
				],
				sectionImg: sectionImg3,
			},
		},
		{
			leftSectionData: {
				mainTitle: "Upload your product assets and start production",
				contentData: [
					{
						content:
							"Prepare your audio and print files required for production.",
					},
				],
			},
			rightSectionData: {
				mainTitle: "Professional audio mastering and artwork support.",
				contentData: [
					{
						contentTitle: "Audio mastering service",
						content:
							"Qrates offers a audio mastering service with a partner professional audio engineer to support optimal sound creation.",
					},
					{
						contentTitle: "Artwork support",
						content:
							"We help ensure that your artwork conforms to printing standards and that your product is as beautiful as possible.",
					},
				],
			},
		},
		{
			leftSectionData: {
				sectionImg: sectionImg4,
			},
			rightSectionData: {
				mainTitle: "Pressing records and making cassette tapes",
				contentData: [
					{
						contentTitle: "Trusted production partners",
						content:
							"We partner with factories that have a long history of manufacturing vinyl records and cassette tapes with proven technical capabilities and produce world-class quality products.",
					},
					{
						contentTitle: "Speedy delivery time",
						content:
							"Vinyl records are shipped from our factory within an average of 16 weeks after ordering. Cassette tapes can be shipped from the factory in an average of 8 weeks or less.",
					},
				],
			},
		},
		{
			rightSectionData: {
				mainTitle: "Warehousing and Distribution",
				contentData: [
					{
						contentTitle: "Free warehousing",
						content:
							"When you sell records or cassettes on Qrates, you can store your products for free in one of our three worldwide distribution centers (USA, UK, Japan).",
					},
					{
						contentTitle: "Shipping",
						content:
							"When a product is purchased from a customer, Qrates carefully packages the product and ships it worldwide. We can also ship products to any designated location.",
					},
				],
				sectionImg: sectionImg5,
			},
		},
		{
			leftSectionData: {
				mainTitle: "Receive revenue",
				contentData: [
					{
						content:
							"Make a request to receive your revenue. We can deposit your funds to your pre-registered bank account or Paypal account.",
					},
				],
				sectionImg: sectionImg6,
			},
			rightSectionData: {
				mainTitle: "Continue selling on Qrates",
				contentData: [
					{
						contentTitle: "Selling on Qrates",
						content:
							"By storing your inventory in the Qrates warehouse, you can continue to sell your work on Qrates. You can manufacture the exact number of copies as your project collected at the end of the crowdfunding campaign, or you can make more copies and continue to sell them on Qrates.",
					},
					{
						contentTitle: "Repress",
						content:
							"Repressing records is always easy. Master stampers can be stored at the factory for 18 months at no charge, so there is no need to make new stampers within that time frame. Use the repress requests from fans as a signal on when to repress more records.",
					},
				],
				button: true,
			},
		},
	];
	return (
		<>
			<div className="for-artists-page-middle-section-container">
				<div className="for-artists-page-middle-section-title">
					<h1>You make music. We do the rest.</h1>
				</div>
				<div className="row mx-0 for-artists-page-middle-section-content">
					<div className="col-md-6 for-artists-page-middle-section-left-content">
						<div className="for-artists-page-middle-section-left-content-title">
							<div className="for-artists-page-middle-section-left-content-inner-title">
								<p>you</p>
							</div>
							<h3>Focus on making music</h3>
							<p className="for-artists-page-middle-section-left-content-title-content">
								You can focus on your music production with peace of mind: the
								Artist Toolkit has lots of information about music production,
								knowledge about vinyl records and cassettes, and tips on how to
								sell your music. Artist Toolkit
							</p>
						</div>
					</div>
					<div className="col-md-6 for-artists-page-middle-section-right-content">
						<div className="for-artists-page-middle-section-right-content-title">
							<div className="for-artists-page-middle-section-right-content-inner-title">
								<p>qrates</p>
							</div>
							<h3>We'll take care of the hassle</h3>
							<p className="for-artists-page-middle-section-right-content-title-content">
								Qrates supports a wide range of artists while eliminating the
								hassles, costs and risks associated with pressing records,
								giving artists more time and income back in their hands.
							</p>
						</div>
					</div>
				</div>
				{sectionData?.map((data, index) => (
					<div
						className="row mx-0 for-artists-page-middle-section-content"
						key={index}
					>
						<div className="col-md-6 for-artists-page-middle-section-left-content">
							<h4>{data?.leftSectionData?.mainTitle}</h4>
							{data?.leftSectionData?.contentData?.map((contentList, index) => (
								<div key={index}>
									<p className="fw-bold mb-0">{contentList?.contentTitle}</p>
									<p>{contentList?.content}</p>
								</div>
							))}
							{data?.leftSectionData?.sectionImg && (
								<div className="for-artists-page-middle-section-right-content-img">
									<img
										src={data?.leftSectionData?.sectionImg}
										className="img-fluid"
										alt="section-img"
									/>
								</div>
							)}
						</div>
						<div className="col-md-6 for-artists-page-middle-section-right-content">
							<h4>{data?.rightSectionData?.mainTitle}</h4>
							{data?.rightSectionData?.contentData?.map(
								(contentList, index) => (
									<div key={index}>
										<p className="fw-bold mb-0">{contentList?.contentTitle}</p>
										<p>{contentList?.content}</p>
									</div>
								)
							)}
							{data?.rightSectionData?.sectionImg && (
								<div className="for-artists-page-middle-section-right-content-img">
									<img
										src={data?.rightSectionData?.sectionImg}
										className="img-fluid"
										alt="section-img"
									/>
								</div>
							)}
							{data?.rightSectionData?.button && (
								<div className="for-artist-middle-section-button">
									<Link to="/how-it-works" target="_top">
										<button>how it works</button>
									</Link>
								</div>
							)}
						</div>
						<div className="for-artists-page-middle-section-content-index">
							<h1>{index + 1}</h1>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ArtistMiddleSection;
