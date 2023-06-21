import React, { Component } from "react";

import nlp_tlp_logo from "../images/nlp-tlp-logo.png";
import me from "../images/michael-stewart.jpg";
import tyler from "../images/tyler-bikaun.jpg";
import melinda from "../images/melinda-hodkiewicz.jpg";
import wei from "../images/wei-liu.jpg";
import sirui from "../images/sirui-li.jpg";
import centre_logo from "../images/center-logo.png";

class HomePage extends Component {
	render() {
		return (
			<>
				{/*				<p>
					Have you ever wondered how to harness the significant volume of
					knowledge buried within unstructured text? Approximately 80% of all
					data in organisations is unstructured, a large portion of which exists
					in the form of technical language such as doctor's notes, maintenance
					work orders, and traffic reports. Natural Language Processing (NLP)
					provides the means to construct knowledge graphs from unstructured
					short text, enabling the querying of knowledge held within the text.
					Knowledge graphs are employed by a wide range of top companies – eBay,
					Walmart and Volvo to name a few. But what exactly is a knowledge
					graph? Why are leading companies actively building knowledge graphs,
					and how is one created?
				</p>*/}

				<section id="abstract">
					<h2>Abstract</h2>
					<p>
						Have you ever wondered how to harness the significant volume of
						knowledge buried within unstructured text? Approximately 80% of all
						data in organisations is unstructured, a large portion of which
						exists in the form of technical language such as doctor's notes,
						maintenance work orders, and traffic reports. Natural Language
						Processing (NLP) provides the means to construct knowledge graphs
						from unstructured short text, enabling the querying of knowledge
						held within the text. Knowledge graphs are employed by a wide range
						of top companies – eBay, Walmart and Volvo to name a few. But what
						exactly is a knowledge graph? Why are leading companies actively
						building knowledge graphs, and how is one created?
					</p>
					<p>
						This tutorial provides a practical guide to technical language
						processing (TLP) and knowledge graphs. We will begin by providing an
						overview of knowledge graphs, highlighting their unique advantages
						when compared to structured data models such as relational tables.
						We will then detail the underlying natural language processing
						techniques involved in knowledge graph construction from text,
						namely named entity recognition (NER) and relation extraction (RE).
						We will motivate the need for knowledge graphs via a simple,
						practical example in the maintenance domain. This Python
						notebook-based example will demonstrate how noisy, unstructured text
						such as maintenance work orders can be transformed into a knowledge
						graph to visualise and query unstructured data and allow domain
						experts to make informed business decisions.
					</p>
					{/*<p>
						<ul className="chevron-bullets extra-indent">
							<li>Entity recognition</li>
							<li>Lexical normalisation</li>
							<li>Knowledge graphs</li>
							<li>Ontologies</li>
							<li>Annotation</li>
							<li>Adaptive user interfaces</li>
							<li>Knowledge representation and reasoning</li>
						</ul>
					</p>*/}
				</section>
				<section id="outline">
					<h2>Tutorial Outline</h2>

					<ul className="tutorial-outline">
						<li>
							<span className="time">9:00 - 9:30</span>
							<b>Session 1 - Introduction</b>
							<ul>
								<li>Using Menti</li>
							</ul>
						</li>
						<li>
							<span className="time">9:30 - 10:30</span>
							<b>
								Session 2 - Discussion - Experiences with natural and technical
								language processing
							</b>
						</li>
						<li>
							<span className="time">10:30 - 11:00</span>
							<b>Break</b>
						</li>

						<li>
							<span className="time">11:00 - 12:30</span>
							<b>Session 3 - Introduction to Knowledge Graphs</b>
							<ul>
								<li>Introduction to graph databases and knowledge graphs</li>
								<li>Graph databases vs relational databases</li>
								<li>What makes knowledge graphs so useful?</li>
								<li>Incorporating unstructured data into a knowledge graph</li>
								<li>Activities</li>
							</ul>
						</li>
						<li>
							<span className="time">12:30 - 13:30</span>
							<b>Lunch</b>
						</li>

						<li>
							<span className="time">13:30 - 15:00</span>
							<b>
								Session 4 - Building Knowledge Graphs from Unstructured Text
							</b>
							<ul>
								<li>Introduction to Natural & Technical Language Processing</li>
								<li>
									Fundamental NLP/TLP Techniques (corpora, tokenisation,
									embeddings)
								</li>
								<li>Text cleaning via Lexical Normalisation</li>
								<li>Extracting entities via Named Entity Recognition</li>
								<li>
									Extracting relations between entities via Relation Extraction
								</li>
								<li>Querying the knowledge graph</li>
								<li>Activities</li>
							</ul>
						</li>
						<li>
							<span className="time">15:00 - 15:15</span>
							<b>Break</b>
						</li>

						<li>
							<span className="time">15:15 - 16:00</span>
							<b>Session 5 - Practical Applications of Knowledge Graphs</b>
							<ul>
								<li>
									Demonstration of Natural and Technical Language Processing
									tools:
									<ul>
										<li>Echidna</li>
										<li>Aquila</li>
										<li>Quickgraph</li>
										<li>Industrial Data Ontology (IDO)</li>
									</ul>
								</li>
								<li>Wrap up</li>
							</ul>
						</li>
					</ul>
					{/*
					<table>
						<tr>
							<th>
								Part 1: What is a knowledge graph and why are they useful? (60
								mins)
							</th>
						</tr>
						<tr>
							<td>
								<b>- Introduction</b> (15 mins)
							</td>
						</tr>
						<tr>
							<td>
								<b>- Questions</b> (10 mins)
							</td>
						</tr>
					</table>*/}
				</section>

				<section id="venue">
					<h2>Venue</h2>
					<p>
						The tutorial will be located at Brisbane Convention & Exhibition
						Centre, QLD, Australia.
					</p>
					{/*					<p>
						It is also available online.&nbsp;
						<a
							href="https://teams.microsoft.com/l/meetup-join/19%3a743a496352e64f88bcdf990c1cf6cc30%40thread.tacv2/1669626676282?context=%7b%22Tid%22%3a%2205894af0-cb28-46d8-8716-74cdb46e2226%22%2c%22Oid%22%3a%22d22e2e28-2cc7-4070-936d-6867540335ac%22%7d"
							target="_blank"
							rel="noreferrer"
						>
							Click here
						</a>{" "}
						to join the tutorial on Microsoft Teams on Monday 5 December 2022 at
						9am AWST.
					</p>*/}
				</section>

				<section id="what-to-bring">
					<h2>What to Bring</h2>
					<p>
						You are encouraged to bring your laptop to the tutorial so that you
						can follow along with the Jupyter notebook in Session 4 (click{" "}
						<b>
							<a
								href="https://github.com/nlp-tlp/Tutorial-WMC/blob/main/WMC.ipynb"
								target="_blank"
							>
								here
							</a>
						</b>{" "}
						to open the notebook). You are not expected to install any packages
						or run any code during the session, but are welcome to run the code
						in the notebook after the session if you wish to try it out
						yourself.
					</p>
				</section>

				<section id="materials">
					<h2>Materials</h2>

					<p>
						All of the slides, the notebook, and other accompanying materials
						are available on the{" "}
						<a href="https://github.com/nlp-tlp/Tutorial-WMC" rel="noreferrer">
							GitHub repo
						</a>
						.
					</p>
				</section>

				<section id="speakers">
					<h2>Speakers</h2>

					<div className="flex-container flex-align-center profile">
						<div className="flex-item">
							<img src={wei} alt="Wei Liu" className="profile-photo" />
							<div className="profile-details">
								<h3>Assoc/Prof Wei Liu</h3>
								<h4>Associate Professor, UWA</h4>
								<ul className="profile-links">
									<li>
										<a
											href="https://www.linkedin.com/in/wei-liu-uwa"
											target="_blank"
											rel="noreferrer"
										>
											LinkedIn
										</a>
									</li>
									<li>
										<a
											href="https://scholar.google.com/citations?user=o_u17HMAAAAJ&hl=en"
											target="_blank"
											rel="noreferrer"
										>
											Google Scholar
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex-item">
							<p>
								Dr Liu received her PhD from the University of Newcastle,
								Australia in 2003. She is now a full time teaching & research
								academic in the Department of Computer Science and Software
								Engineering at the University of Western Australia. Her research
								focuses on knowledge discovery from natural language text, deep
								learning methods for knowledge graph construction and analysis,
								as well as sequential data mining and forecasting in traffic and
								water consumption domain. She has published in highly reputable
								venues such as ACM Computer Surveys, Journal of Data Mining and
								Knowledge Discovery, Knowledge and Information Systems,
								International Conference on Data Engineering (ICDE), ACM
								International Conference on Information and Knowledge Management
								(CIKM). She has won three Australian Research Council Grants and
								managed several industry grants. Her current industry-related
								research projects include knowledge graph refinement for
								geological survey reports, incident log analysis and
								visualisation, short-term traffic predication and cognitive
								computing for asset management.{" "}
							</p>
						</div>
					</div>

					<div className="flex-container flex-align-center profile">
						<div className="flex-item">
							<img src={sirui} alt="Sirui Li" className="profile-photo" />
							<div className="profile-details">
								<h3>Dr Sirui Li</h3>
								<h4>Research Associate, UWA</h4>
								<ul className="profile-links">
									<li>
										<a
											href="https://www.linkedin.com/in/sirui-li-563715163"
											target="_blank"
											rel="noreferrer"
										>
											LinkedIn
										</a>
									</li>
									<li>
										<a
											href="https://scholar.google.com/citations?user=Wt1wc-sAAAAJ&hl=en"
											target="_blank"
											rel="noreferrer"
										>
											Google Scholar
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex-item">
							<p>
								Sirui Li is a research associate at The Centre for Transforming
								Maintenance through Data Science. Her primary focus lies in
								exploring deep learning-based approaches to uncover valuable
								insights within knowledge graphs. She completed her Bachelor's
								and Master's degrees at the Australian National University, and
								subsequently pursued her PhD at Murdoch University. She is
								enthusiastic about applying knowledge graphs to industry
								applications and is keen on exploring diverse areas.
							</p>
						</div>
					</div>

					<div className="flex-container flex-align-center profile">
						<div className="flex-item">
							<img src={me} alt="Michael Stewart" className="profile-photo" />
							<div className="profile-details">
								<h3>Dr Michael Stewart</h3>
								<h4>Research Associate, UWA</h4>
								<ul className="profile-links">
									<li>
										<a
											href="https://www.linkedin.com/in/michael-stewart-80211a1a0"
											target="_blank"
											rel="noreferrer"
										>
											LinkedIn
										</a>
									</li>
									<li>
										<a
											href="https://scholar.google.com.au/citations?hl=en&user=8-kgpZkAAAAJ"
											target="_blank"
											rel="noreferrer"
										>
											Google Scholar
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex-item">
							<p>
								Dr. Michael Stewart received his PhD from the University of
								Western Australia in 2020. He currently works as a postdoctoral
								research fellow at The University of Western Australia supported
								by the{" "}
								<a
									href="https://maintenance.org.au"
									target="_blank"
									rel="noreferrer"
								>
									Centre for Transforming Maintenance through Data Science
								</a>
								. His research focuses on information extraction and knowledge
								graph construction from unstructured technical text, entity
								typing, and lexical normalisation. His work is published in a
								number of highly regarded venues including Knowledge
								Representation and Reasoning, Empirical Methods in Natural
								Language Processing, and the International Conference on Data
								Mining. In 2019 he was awarded the Research & Innovation Project
								of the Year - Postgraduate Tertiary Student Award at the 28th
								WAITTA INCITE Awards, and as part of a team led by Dr Wei Liu he
								was the first prize winner of the ICDM 2019 Knowledge Graph
								Contest. He is currently working on deep learning-based methods
								for constructing knowledge graphs from technical short text. He
								is also co-supervising several Honours, Masters and PhD students
								within the{" "}
								<a href="https://nlp-tlp.org" target="_blank" rel="noreferrer">
									UWA Natural and Technical Language Processing Group
								</a>
								.
							</p>
						</div>
					</div>

					<div className="flex-container flex-align-center profile">
						<div className="flex-item">
							<img
								src={melinda}
								alt="Melinda Hodkiewicz"
								className="profile-photo"
							/>
							<div className="profile-details">
								<h3>Prof Melinda Hodkiewicz</h3>
								<h4>Professor, UWA</h4>
								<ul className="profile-links">
									<li>
										<a
											href="https://www.linkedin.com/in/melinda-hodkiewicz-b6bbba7"
											target="_blank"
											rel="noreferrer"
										>
											LinkedIn
										</a>
									</li>
									<li>
										<a
											href="https://scholar.google.com.au/citations?user=1JGboosAAAAJ&hl=en"
											target="_blank"
											rel="noreferrer"
										>
											Google Scholar
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex-item">
							<p>
								Professor Melinda Hodkiewicz BA Hons (Oxon), PhD, CEng, FTSE is
								engineering academic working to improve maintenance, asset
								management and safety practices in industry. Language
								Processing, Knowledge Graphs and Ontologies are key to the work
								in the UWA NLP-TLP group to transform the productivity and
								effectiveness of asset managers and maintenance professionals.
								In addition to working with the UWA team to develop value-adding
								tools Melinda is also working, as Australia's representative on
								the ISO TC184/SC4 Industrial Data Standard committee, to
								translate this work into standards for adoption by industry.
								Specifically she is involved in the new Industrial Data Ontology
								standard. In the early 2010's she chaired Australia’s MB19
								committee and led Australia’s involvement in the development of
								the International Standards for Asset Management 2012-2015 and
								its Australian version.
							</p>
						</div>
					</div>

					<div className="flex-container flex-align-center profile">
						<div className="flex-item">
							<img src={tyler} alt="Tyler Bikaun" className="profile-photo" />
							<div className="profile-details">
								<h3>Tyler Bikaun</h3>
								<h4>PhD Student, UWA</h4>
								<ul className="profile-links">
									<li>
										<a
											href="https://www.linkedin.com/in/tyler-bikaun/"
											target="_blank"
											rel="noreferrer"
										>
											LinkedIn
										</a>
									</li>
									<li>
										<a
											href="https://scholar.google.com/citations?user=jZpJEnEAAAAJ&hl=en"
											target="_blank"
											rel="noreferrer"
										>
											Google Scholar
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex-item">
							<p>
								Tyler Bikaun is a PhD candidate at the University of Western
								Australia supported by the{" "}
								<a
									href="https://maintenance.org.au"
									target="_blank"
									rel="noreferrer"
								>
									Centre for Transforming Maintenance through Data Science
								</a>{" "}
								and{" "}
								<a
									href="https://www.mriwa.wa.gov.au/"
									target="_blank"
									rel="noreferrer"
								>
									Mineral Research Institute of Western Australia
								</a>
								. His research concentrates on knowledge graph construction from
								noisy technical texts, data curation in low-resource domains,
								and generative knowledge extraction and normalisation using deep
								learning techniques. Tyler's work has been published in venues
								such as Empirical Methods in Natural Language Processing,
								Association for Computational Linguistics, and the Prognostic
								Health Management Society European Conference.
							</p>
						</div>
					</div>
				</section>

				<section id="acknowledgment">
					<h2>Acknowledgment</h2>

					<div className="flex-container flex-align-center profile">
						<div className="flex-item acknowledgment">
							<p>
								This tutorial is supported by the ARC Training Centre for
								Transforming Maintenance Through Data Science (CTMTDS).
							</p>
							<p>
								The Centre is a partnership that uses data science to transform
								maintenance and its workforce. It will do this by eliminating
								manual, repetitive transactional work; developing models to
								enable people to make better complex decisions; providing
								standardized training for industry to improve maintenance
								productivity; and building an ongoing maintenance capability in
								our research institutions and industry.
							</p>
							<p>
								For more information on the Centre, please visit the website at{" "}
								<a
									href="https://maintenance.org.au"
									target="_blank"
									rel="noreferrer"
								>
									https://maintenance.org.au
								</a>
								.
							</p>
						</div>
						<div className="flex-item">
							<a
								href="https://maintenance.org.au"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={centre_logo}
									alt="Centre for Transforming Maintenance Through Data Science"
									className="profile-photo acknowledgment-logo"
								/>
							</a>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default HomePage;
