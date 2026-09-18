export default function Education() {
  return (
    <section className="section" id="background">
      <div className="shell">
        <div className="sec-head">
          <div>
            <p className="sec-marker">Background</p>
            <h2 className="sec-title rv">Education, patent and certifications</h2>
          </div>
          <p className="sec-lede rv">The academic base and the recognition sitting behind the shipped work.</p>
        </div>

        <div className="cred">
          <div className="edu rv">
            <div className="edu-row">
              <em>Aug 2022 - Jun 2026</em>
              <b>B.E. in Computer Science &amp; Engineering</b>
              <span>Chandigarh University (CU), India</span>
              <ul>
                <li>CGPA 7.56</li>
                <li>Data structures, system design, DBMS, operating systems and computer networks</li>
                <li>Consistent focus on shipping production-grade software alongside coursework</li>
              </ul>
            </div>
            <div className="edu-row">
              <em>2020 - 2022</em>
              <b>Senior Secondary</b>
              <span>St D. R. Public Senior Secondary School</span>
              <ul><li>Intermediate 70.3% · High school 74.8%</li></ul>
            </div>
            <div className="edu-row">
              <em>Competitive programming</em>
              <b>400+ DSA problems, 1000+ GitHub contributions</b>
              <span>LeetCode practice paired with open-source work, kept up continuously rather than in bursts.</span>
            </div>
          </div>

          <div className="honours rv">
            <div className="honour"><em>Patent · Published</em><b>AI-Enhanced Neuroadaptive VR Therapy System</b><span>Indian Government Patent Portal · Application No. 202511113779</span></div>
            <div className="honour"><em>Mar 2026</em><b>Advanced SQL &amp; Database Design</b><span>AWS Training &amp; Certification</span></div>
            <div className="honour"><em>Certified</em><b>Full-Stack Web Development</b><span>IBM · Udemy</span></div>
            <div className="honour"><em>Open source</em><b>durabolt on npm</b><span>Published under @rahulchoudhary05 - exactly-once execution for Node.js and Postgres</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
