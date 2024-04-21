import React from 'react';
import './Styles/Faq.css'; // Import CSS file

const Faq = () => {
  return (
    <div id="page1">
      <div id="faq">
        <h1><b>FAQs</b></h1>
      </div>

      <div id="ques">
        <div id="div1">
          <div className="div11">
            <details className="q1">
              <summary className="titles">What is hackathon?<p>+</p></summary>
              <div className="quess">
                <pre>
                  A hackathon is an event where "hackers" all
                  over the globe collaborate on creating a
                  functioning software or hardware by
                  the end of the event
                </pre>
              </div>
            </details>
          </div>

          <div className="div11">
            <details className="q1">
              <summary className="titles">Who can attend?<p>+</p></summary>
              <div className="quess">
                <pre>
                  GIH is open to all B.Tech undergraduates 
                  from all over India.
                </pre>
              </div>
            </details>
          </div>

          <div className="div11">
            <details className="q1">
              <summary className="titles">I am a first time hacker, what should I do?<p>+</p></summary>
              <div className="quess">
                <pre>
                  No worries, we love to welcome first time
                  hackers at GIH. We have many awesome
                  workshops and events which will help 
                  you get started with hackathons in general.
                </pre>
              </div>
            </details>
          </div>

          <div className="div11">
            <details className="q1">
              <summary className="titles">How does team formation work?<p>+</p></summary>
              <div className="quess">
                <pre>
                  You can form a team with a maximum of four 
                  members. If you don't already have a team,
                  there will be plenty of opportunities for 
                  you to meet other hackers and create one!
                </pre>
              </div>
            </details>
          </div>
        </div>
        <div id="div2">
          <div className="div11">
            <details className="q1">
              <summary className="titles">How to register myself in GIH ?<p>+</p></summary>
              <div className="quess">
                <pre>
                  To get started, simply fill out the form
                  mentioned on Devfolio, our hosting partner
                  and join our Discord server
                  (Link Below!).We'll guide you through
                  everything once you're there.
                </pre>
              </div>
            </details>
          </div>

          <div className="div11">
            <details className="q1">
              <summary className="titles">I would like to ask additional questions.<p>+</p></summary>
              <div className="quess">
                <pre>
                  Reach us directly at loopClub@gcet.edu
                  We are happy to help you.
                </pre>
              </div>
            </details>
          </div>

          <div className="div11">
            <details className="q1">
              <summary className="titles">Will there be a Registration Fee?<p>+</p></summary>
              <div className="quess">
                <pre>
                  No, there will be no registration cost
                  for Galgotias International Hackathon
                </pre>
              </div>
            </details>
          </div>

          <div className="div11">
            <details className="q1">
              <summary className="titles">Will there be swags?<p>+</p></summary>
              <div className="quess">
                <pre>
                  Yes! Participants will have many chances to
                  win Galgotias International Hackathon swags!
                </pre>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
