'use strict';

// define your own venue constants
const INFOVIS_17 = `IEEE Transactions on Visualization and Computer Graphics (Proc. InfoVis'17)`;
const CHI_17 = `ACM Human Factors in Computing Systems (CHI'17)`;
const FACCT_24 = `ACM Conference on Fairness, Accountability, and Transparency (FAccT'24)`;
const SIGSPATIAL_24 = `ACM International Conference on Advances in Geographic Information Systems (SIGSPATIAL'24)`;
const HICSS_24 = `THE EUROPEAN PHYSICAL JOURNAL SPECIAL TOPICS`;
const EPJS_22 = `Proceedings of the 57th Hawaii International Conference on System Sciences`;

// define your own author constants
const ZENING = 'Zening Qu';
const FANDU = 'Fan Du';
const RYAN_ROSSI = 'Ryan A. Rossi';
const JESSICA_HULLMAN = 'Jessica Hullman';
const JEFFREY_HEER = 'Jeffrey Heer';
const KANIT = 'Kanit Wongsuphasawat';
const DOMINIK = 'Dominik Moritz';
const BILL_HOWE = 'Bill Howe';
const JEFF_BURKE = 'Jeff Burke';
const CECILIA_ARAGON = 'Cecilia Aragon';
const NAN_CHEN = `Nan-Chen Chen`;
const MICHAEL_BROOKS = 'Michael Brooks';
const RAFAL_KOCIELNIK = 'Rafal Kocielnik';
const RAY_HONG = 'Sungsoo (Ray) Hong';
const JEFF_SMITH = 'Jeff Smith';
const SANNY_LIN = 'Sanny Lin';
const JOHN_M_YE = 'John M Ye';
const MAN_CAO = 'Man Cao';
const TIANZHOU_CHEN = 'Tianzhou Chen';
const BAOZHONG_YU = 'Baozhong Yu';
const JIANLIANG_MA = 'Jianlang Ma';
const ROBERT_WOLFE = 'Robert Wolfe';
const ISAAC_SLAUGHTER = 'Isaac Slaughter';
const BIN_HAN = 'Bin Han';
const BINGBING_WEN = 'Bingbing Wen';
const YIWEI_YANG = 'Yiwei Yang';
const LUCAS_ROSENBLATT = 'Lucas Rosenblatt';
const BERNEASE_HERMAN = 'Bernease Herman';
const EVA_BROWN = 'Eva Brown';
const NIC_WEBER = 'Nic Weber';
const ANAT_CASPI = 'Anat Caspi';
const AN_YAN = 'An Yan';
const SEAN_YANG = 'Sean Yang';


// define your own award constants
const BEST_PAPER = 'BEST_PAPER';
const HONORABLE_MENTION = 'HONORABLE_MENTION';

const e = React.createElement;

function Paper(props) {
  const authorCount = props.authors.length;
  return (
    <div className="paper">
      <div className="paper-title">{props.title}.</div>

      <div>{props.authors.map((author, index) => {
        return (
          <span key = {index} className={author === ZENING ? "me" : ""}>
            {author}
            {(index + 1) === authorCount ? '.' : ', '}
          </span>
        );
      })}</div>

      <div><i>{props.venue + `, `}</i>{props.date}.</div>

      <div>{props.acceptanceRate && `[${props.acceptanceRate}% Acceptance Rate]`}</div>

      {props.awardType === HONORABLE_MENTION &&
        <div className="honorable-mention">
          <i className="fas fa-award"></i>
          <span>{' Best Paper Honorable Mention'}</span>
        </div>
      }

      <div className="links">
        {props.pdf && <a href={props.pdf}>PDF</a>}

        {props.video && <span>{`  `}<a href={props.video}>VIDEO</a></span>}

        {props.slides && <span> {`  `} <a href={props.slides}>SLIDES</a> </span>}

        {props.code && <span> {`  `} <a href={props.code}>CODE</a> </span>}
      </div>

    </div>
  );
}

function PaperList() {
  return (
    <div>

      <div className="subtitle">Conference Papers</div>

      <Paper
        title =
        'Towards Zero-Shot Annotation of the Built Environment with Vision-Language Models'
        authors = {[BIN_HAN, YIWEI_YANG, ANAT_CASPI, BILL_HOWE]}
        venue = {SIGSPATIAL_24}
        date = 'Oct 2024'
        pdf = 'paper/vl_annotation_24.pdf'
        code = {`https://github.com/BeanHam/2024-vl-annotation`}
      />

      <Paper
        title =
        'SARN: Structurally-Aware Recurrent Network for Spatio-Temporal Disaggregation'
        authors = {[BIN_HAN, BILL_HOWE]}
        venue = {SIGSPATIAL_24}
        date = 'Oct 2024'
        pdf = 'paper/disaggregation_24.pdf'
        code = {`https://github.com/BeanHam/2024-urban-disaggregation`}
      />

      <Paper
        title =
        'Geospatial Imputation of Urban Mobility Data with Self-Supervised Learning'
        authors = {[BIN_HAN, BILL_HOWE]}
        venue = {HICSS_24}
        date = 'Dec 2023'
        pdf = 'paper/imputation_24.pdf'
        code = {`https://github.com/BeanHam/2022-urban-inpainting`}
      />

      <Paper
        title =
        'Laboratory-Scale AI: Open-Weight Models are Competitive with ChatGPT Even in Low-Resource Settings'
        authors = {[ROBERT_WOLFE, ISAAC_SLAUGHTER, BIN_HAN, BINGBING_WEN, YIWEI_YANG, LUCAS_ROSENBLATT, BERNEASE_HERMAN, EVA_BROWN, ZENING, NIC_WEBER, BILL_HOWE]}
        venue = {FACCT_24}
        date = 'June 2024'
        pdf = 'paper/2024-Lab-Scale-AI.pdf'
        code = {`https://github.com/BillHoweLab/laboratory-scale-ai`}
      />

      <Paper
        title =
        'Integrative urban AI to expand coverage, access, and equity of urban data'
        authors = {[BILL_HOWE, EVA_BROWN, BIN_HAN, BERNEASE_HERMAN, NIC_WEBER, AN_YAN, SEAN_YANG, BILL_HOWE]}
        venue = {EPJS_22}
        date = 'June 2024'
        pdf = 'paper/integrative_urban.pdf'
        code = {``}
      />

      <Paper
        title =
        'Keeping Multiple Views Consistent: Constraints, Validations, and Exceptions in Visualization Authoring'
        authors = {[ZENING, JESSICA_HULLMAN]}
        venue = {INFOVIS_17}
        date = 'Jan 2018'
        pdf = 'paper/2018-Consistency-InfoVis.pdf'
        acceptanceRate = {23}
        awardType = {HONORABLE_MENTION}
        video = {`https://vimeo.com/238853591?ref=tw-share`}
        slides = {`https://github.com/ZeningQu/InfoVis17-Consistency-Slides`}
      />

      <Paper
        title = 'Voyager 2: Augmenting Visual Analysis with Partial View Specifications'
        authors = {[KANIT, ZENING, DOMINIK, 'Riley Chang', 'Felix Ouk',
          'Anushka Anand', 'Jock Mackinlay', BILL_HOWE, JEFFREY_HEER]}
        venue = {CHI_17}
        date = 'May 2017'
        pdf = 'paper/2017-Voyager2-CHI.pdf'
        acceptanceRate = {25}
        video = {`https://vimeo.com/199084718`}
        code = {`https://github.com/vega/voyager`}
      />

      <Paper
        title = 'SparQs: Visual Analytics for Sparking Creativity in Social Media Exploration'
        authors = {[NAN_CHEN, MICHAEL_BROOKS, RAFAL_KOCIELNIK,
          JEFF_SMITH, SANNY_LIN, ZENING, CECILIA_ARAGON]}
        venue = {`In Proceedings of the 19th International Conference on Human-Computer Interaction
          (HCI International\'17).`}
        date = '2017'
        pdf = 'paper/2017-SparQs-SCSM.pdf'
      />

      <Paper
        title = 'Lariat: A Visual Analytics Tool for Social Media Researchers to Explore Twitter Datasets'
        authors = {[NAN_CHEN, MICHAEL_BROOKS, RAFAL_KOCIELNIK, RAY_HONG,
          JEFF_SMITH, SANNY_LIN, ZENING, CECILIA_ARAGON]}
        venue = {`In Proceedings of the 50th Hawaii International Conference on System Sciences (HICSS'17).`}
        date = '2017'
        pdf = 'paper/2017-Lariat-HICSS.pdf'
      />

      <Paper
        title = 'Linear Time-Invariant System Based Assessment Model for Coronary Heart Disease'
        authors = {[ZENING, 'Yongqiang Lyu', 'Yida Tang', 'Wenyao Wang',
          'Zihan Wang', 'Jiaming Hong', 'Nazim Agoulmine']}
        venue = {`IEEE 15th International Conference on e-Health Networking, Applications \& Services (HealthCom'13)`}
        date = '2013'
        pdf = 'paper/2013-CHD-HealthCom.pdf'
      />

      <div className="subtitle">Journal Articles</div>

      <div className="subtitle">Workshop Papers</div>

      <Paper
        title = 'Aunt Lily Can Say Her Visualizations: Directing Analysis, Design, and Storytelling in Natural Language (A Vision)'
        authors = {[ZENING, FANDU, RYAN_ROSSI, BILL_HOWE]}
        venue = {`Exploring Opportunities and Challenges for Natural Language Techniques to Support Visual Analysis Tasks
          (NLVIZ Workshop), IEEE VIS`}
        date = 'Oct 2021'
        video = {`https://youtu.be/wVWrN8Y7HS0`}
      />

      <Paper
        title = 'Evaluating Visualization Sets: Trade-offs Between Local Effectiveness and Global Consistency'
        authors = {[ZENING, JESSICA_HULLMAN]}
        venue = {`Proceedings of the Sixth Workshop on Beyond Time and Errors on Novel Evaluation
          Methods for Visualization (BELIV Workshop), IEEE VIS`}
        date = 'Oct 2016'
        pdf = 'paper/2016-Consistency-BELIV.pdf'
        video = {`https://vimeo.com/229636412`}
        slides = {`https://github.com/ZeningQu/BELIV16-Slides`}
      />

      <div className="subtitle">Demo</div>

      <Paper
        title = 'Matryoshka: Design of NDN Multiplayer Online Game'
        authors = {['Zhehao Wang', ZENING, JEFF_BURKE]}
        venue = {`Proceedings of the 1st ACM Conference on Information-Centric Networking (ICN'14)`}
        date = '2014'
        pdf = 'paper/2014-Matryoshka-ICN.pdf'
      />

      <div className="subtitle">Tech Report</div>
      <Paper
        title = 'Egal Car: A Peer-to-Peer Car Racing Game Synchronized Over Named Data Networking'
        authors = {[ZENING, JEFF_BURKE]}
        venue = 'UCLA Technical Report'
        date = '2012'
        pdf = 'paper/2012-EgalCar-TR.pdf'
      />

      <div className="subtitle">arXiv</div>

    </div>

  );
}

const domContainer = document.querySelector('#Papers');
ReactDOM.render(e(PaperList), domContainer);
