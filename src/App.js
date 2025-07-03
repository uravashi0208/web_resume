import React from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Typography,
  Box,
  Avatar,
  Link,
  IconButton,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CheckIcon from '@mui/icons-material/Check';
import {
  FaLinkedinIn,
  FaAngular,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaGitAlt,
  FaJira,
  FaShieldAlt,
  FaSyncAlt,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaLaptopHouse,
} from 'react-icons/fa';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Link as ScrollLink, Element, Events } from 'react-scroll';
import './App.css';

// --- THEME DEFINITION ---
// This theme is now configured with the colors and fonts from your styles.css
let theme = createTheme({
  palette: {
    text: {
      primary: '#343a40', // From h1, .h1 color
      secondary: '#6c757d', // From --bs-gray
    },
  },
  customGradients: {
    primary: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    secondary:'linear-gradient(90deg, #ff6b6b, #f06595)'
  },
  typography: {
    fontFamily: '"Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    body1: {
        fontSize: '1.15rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#212529' // from --bs-body-color
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
  },
  components: {
      MuiLink: {
          styleOverrides: {
              root: {
                  color: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
              }
          }
      }
  }
});

theme = responsiveFontSizes(theme); // Makes fonts responsive

// const '17rem' = 240;

// --- Data Arrays (Skills, Experience, etc.) ---
const skills = [
    { icon: <FaAngular />, label: 'Angular' }, { icon: <FaReact />, label: 'React' }, { icon: <FaBootstrap />, label: 'Bootstrap' }, { icon: <FaHtml5 />, label: 'HTML5' }, { icon: <FaCss3Alt />, label: 'CSS3' }, { icon: <FaJs />, label: 'JavaScript' }, { icon: <FaNodeJs />, label: 'Node.js' }, { icon: <FaPhp />, label: 'PHP' }, { icon: <FaDatabase />, label: 'Database' }, { icon: <FaCloud />, label: 'Cloud' }, { icon: <FaRobot />, label: 'AI/ML' }, { icon: <FaGitAlt />, label: 'Git' }, { icon: <FaJira />, label: 'Jira' }, { icon: <FaShieldAlt />, label: 'Security' }, { icon: <FaSyncAlt />, label: 'DevOps' }, { icon: <FaUsers />, label: 'Teamwork' }, { icon: <FaComments />, label: 'Communication' }, { icon: <FaLightbulb />, label: 'Innovation' }, { icon: <FaLaptopHouse />, label: 'Remote Work' },
];
const experiences = [
    { role: 'Freelance IT Consultant', company: 'Self-employed', period: 'March 2024 - Present', duties: ['Built a lightweight Finance Platform that significantly cut helpdesk inquiries and boosted operational efficiency', 'Designed and Architect a Real-time Network Monitoring system that improved uptime by 40%'] }, { role: 'Senior Full Stack Developer', company: 'Hexotix', period: 'February 2023 - February 2024', duties: ['Architected and implemented Full-Stack systems for high-scale enterprise apps.', 'Collaborated directly with the International Clients to gather requirements, manage expectations, and translate needs into functional products', 'Mentored junior developers, established coding standards, and led code reviews to maintain high-quality output across the team', 'Drove cloud adoption and Modern DevOps practices to improve deployment speed, scalability, and reliability'] }, { role: 'Full Stack Developer', company: 'Codeventure Tech LLP', period: 'August 2022 - January 2023', duties: ['Integrated robust REST APIs with Angular frontends', 'Delivered business-critical features on aggressive timelines', 'Managed project lifecycles from planning through release, including backlog grooming, sprint management, and progress reporting'] }, { role: 'Sr. Angular & Node.js Developer - Team Lead', company: 'VPN Infotech', period: 'July 2021 - July 2022', duties: ['Led a team of 5 developers to deliver multiple B2B and B2C apps', 'Championed best practices in coding, testing, and deployment', 'Mentored junior developers and improved team velocity'] }, { role: 'Angular & Ionic Developer', company: 'DI Solution', period: 'September 2020 - June 2021', duties: ['Built hybrid apps with a Ionic, Angular, and Firebase backend support.', 'Solved real-time production issues and collaborated with cross-functional teams'] }, { role: 'Senior PHP Web Developer', company: 'Viprak Web Solutions', period: 'March 2019 - July 2020', duties: ['Developed backend logic and data dashboards for Client analytics (KPI)', 'Created multilingual dynamic website and optimized it for SEO and performance'] }, { role: 'PHP Web Developer', company: 'JR Technolabs', period: 'November 2016 - February 2019', duties: ['Developed and maintained small-scale web applications using PHP, HTML, CSS,and MySQL.', 'Implemented backend functionality including data validation, CRUD operations,and session management to enhance application performance and security.'] }
];
const education = [
    { degree: 'Master of Science in Information Technology', institution: 'KSV University', period: 'July 2014 - May 2016', location: 'Gandhinagar, GJ, India', grade: 'CPI: 7.93' }, { degree: 'Bachelor of Computer Applications', institution: 'Gujarat University', period: 'July 2011 - May 2014', grade: 'CGPA: 7.07' }
];
const projects = [
    { title: 'LinkDM - Instagram Auto DM Tool', tech: 'Angular 9, GraphQL, Node.js, Facebook API, AWS, MongoDB', description: 'LinkDM is an Instagram-approved automation platform enabling creators and brands to send personalized DMs automatically in response to post comments, story mentions, and inbox interactions — trusted by over 25,000+ users and responsible for sending over 150 million DMs.', highlights: ['Developed and maintained a responsive front-end using Angular 9, ensuring mobile-first design and accessibility across all devices.', 'Integrated Meta Business APIs to enable features such as post/reel comment replies, story auto-DMs, and inbox starters with secure OAuth flow.', 'Designed and implemented modular automation workflows, including universal triggers, flow scheduling, white-label DMs, and DM queue management.', 'Maintained code quality, CI/CD pipelines, and Git versioning following Agile development practices with bi-weekly sprints and team retrospectives.', 'Contributed to scaling the infrastructure for upcoming features like Lead Gen, DM Send Limit+, and Multi-Account Support+.'] }, { title: 'RemoteCo - Remote Hiring Platform', tech: 'Angular 8, Node.js, PostgreSQL, Firebase, REST APIs, AWS, Git, CI/CD', description: 'Worked on a remote hiring platform connecting U.S.-based employers with bilingual remote professionals from Latin America across roles like Virtual Assistants, Web Developers, Designers, and Marketers.', highlights: ['Developed and maintained dynamic, mobile-responsive user interfaces using Angular 8, improving navigation and job search usability.', 'Built and secured RESTful APIs with Node.js, managing real-time data flows for job posts, applications, and user messages.', 'Designed complex search and filtering capabilities by profession, language, experience, and skill level to enhance discoverability.', 'Created modules for job posting, resume display, user subscriptions, and employer dashboards.', 'Reduced page load times by 35% through front-end optimization and lazy loading of job content.', 'Maintained development workflows using Git and set up CI/CD pipelines to ensure smooth code deployments and environment consistency.'] }, { title: 'Litemath - Math Exam Portal for Children', tech: 'Angular 8, Node.js, MongoDB', description: '', highlights: ['Developed a dynamic exam creation and result reporting system.', 'Enabled parents to track academic progress with real-time data', 'Led testing, query optimization, and security compliance.'] }
];

function Resume(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('about');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const sectionList = ['About', 'Skills', 'Experience', 'Education', 'Project Highlights'];

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 2,
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Avatar
        alt="Uravashiben Vagadiya"
        src="/assets/img/profile.jpg"
        sx={{
          width: 150,
          height: 150,
          margin: 'auto',
          my: 1,
          border: '5px solid rgba(255,255,255,0.2)',
        }}
      />
      <List>
        {sectionList.map((section) => {
          const id = section.toLowerCase();
          return (
            <ListItem key={id} disablePadding sx={{ flexDirection: 'column' }}>
              <ScrollLink
                activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => {
                  setActiveSection(id);
                  if (mobileOpen) handleDrawerToggle();
                }}
              >
                <ListItemButton className="sidebarhover" sx={{ justifyContent: 'center' }}>
                  <ListItemText
                    primary={section.toUpperCase()}
                    primaryTypographyProps={{
                      fontWeight: '600',
                      color: activeSection === id ? '#ff6b6b' : '#fff',
                      letterSpacing: '1.6px',
                    }}
                  />
                </ListItemButton>
              </ScrollLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  React.useEffect(() => {
    const scrollToDefault = () => {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    scrollToDefault();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{ display: { sm: 'none' } }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Uravashiben Vagadiya
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: '17rem' }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '17rem',
                background: theme.customGradients.primary,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width:'17rem'
              },
            }}
          >
            {drawerContent}
          </Drawer>

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
              width: '17rem',
              background: theme.customGradients.primary,
              color: 'white',
              // Crucial for permanent drawer vertical centering
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width:'17rem'
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        </Box>

        <Container component="main" sx={{ flexGrow: 1}} style={{ width: '100% !important',paddingLeft:'0px',background:"#d7d7d7" }} maxWidth={false}>
          <Toolbar sx={{ display: { sm: 'none' }}} />
          
          <Element name="about" className="resume-section" id="about">
            <section id="about" className='resume-section'>
              <Typography variant="h1" gutterBottom sx={{ lineHeight: 0.9 }}>
                Uravashiben <Box component="span" sx={{ background: theme.customGradients.secondary,WebkitTextFillColor:'#00000000',WebkitBackgroundClip:'text' }}>Vagadiya</Box>
              </Typography>
              <Typography variant="h2" className='title'>
              Senior Full Stack Web Developer
              </Typography>
              <Typography className='subtitle1' sx={{marginBottom:"2rem"}} gutterBottom>
                Gliwice, Poland 40-100 · +48 453 457 100 · <Link href="mailto:urvashiv210@email.com">urvashiv210@email.com</Link>
              </Typography>
              <Typography variant="body1" paragraph>
                I craft high-performance web applications that don't just work—they scale, perform, and impress. With 6+ years as a Senior Full Stack Developer, I bring deep expertise in Angular, Node.js, and cloud platforms like AWS to deliver elegant, real-world solutions that drive business results.
              </Typography>
              <Typography variant="body1" paragraph>
              From startup MVPs to enterprise systems, I've led cross-functional
              teams, owned complex backend logic, and created intuitive UIs that
              users love. Agile by mindset, I thrive in fast-paced environments
              where collaboration, innovation, and clean code matter.
              </Typography>
              <Typography variant="body1" paragraph>
              Based in Europe and working globally, I don't just write code—I
              lead, solve, and deliver. Let's build something remarkable.
              </Typography>
              <IconButton href="https://www.linkedin.com/in/uravashiben-vagadiya-978121171" target="_blank" sx={{color: '#fff !important', width: 'fit-content', height:'2.5rem', width:'2.5rem',background:'#495057',borderRadius:'20%',fontSize:'1.5rem'}}>
                <FaLinkedinIn />
              </IconButton>
            </section>
          </Element>

          <Element name="skills" className="resume-section" id="skills">
            <section id="skills" className='resume-section'>
              <Typography variant="h2" gutterBottom>Skills</Typography>
              <Grid container spacing={2} sx={{justifyContent: 'center',gap: '45px',rowGap: '35px'}}>
                {skills.map((skill) => (
                  <Grid item xs={4} sm={3} md={2} key={skill.label} sx={{ textAlign: 'center', color: '#2f3542' }}>
                    {React.cloneElement(skill.icon, { size: 40 })}
                    <Typography variant="caption" display="block">{skill.label}</Typography>
                  </Grid>
                ))}
              </Grid>
              <Typography className='subtitle1' gutterBottom>Workflow</Typography>
              <Box component="ul" sx={{ paddingLeft: '0', listStyle: 'none',color:"#2f3542" }}>
                {[
                  'Design UI using Figma or provided mockups, then implement with: React.js or Angular (component-based design) Bootstrap, Material UI, or Tailwind CSS for responsive layout',
                  'Ensure mobile-first, accessible, and cross-browser compatibility.',
                  "Choose appropriate tech stack based on the project's needs (e.g., React.js for frontend, Node.js/PHP (Laravel) for backend).",
                  'Develop scalable and secure APIs with Node.js/Express or Laravel.',
                  'Handle authentication, authorization, and data validation.',
                  'Integrate external services (email, payment, messaging bots like Telegram Bot).',
                  'Collaborate with stakeholders or clients to gather functional and technical requirements.',
                  'Define project scope, timelines, and deliverables using tools like Jira or Trello.',
                  'Break down tasks into Agile sprints for structured progress.',
                  'Lead or work in cross-functional Agile teams (developers, designers, QA).',
                  'Conduct code reviews, stand-ups, and sprint retrospectives.',
                  'Use tools like Slack, Zoom, Notion, and Jira for seamless remote collaboration.',
                ].map((text, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <CheckIcon  sx={{ marginRight: '0.5rem', marginTop: '0.2rem' }} />
                    <span>{text}</span>
                  </Box>
                ))}
              </Box>
            </section>
          </Element>

          <Element name="experience" className="resume-section" id="experience">
            <section id="experience"  className='resume-section'>
              <Typography variant="h2" gutterBottom>Experience</Typography>
              {experiences.map((exp, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Grid container justifyContent="space-between" alignItems="flex-start">
                    <Grid item xs={12} md={8}>
                      <Typography variant="h3">{exp.role}</Typography>
                      <Typography className='subtitle1' gutterBottom>{exp.company}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{textAlign: {md: 'right'}}}>
                      <Typography className="experience-period" sx={{ background: theme.customGradients.secondary,WebkitTextFillColor:'#00000000',WebkitBackgroundClip:'text',fontWeight:"bold" }}>{exp.period}</Typography>
                    </Grid>
                  </Grid>
                  <Box component="ul" sx={{ paddingLeft: '25px',color:"#2f3542" }}>
                    {exp.duties.map((duty, i) => (
                      <Box
                      component="li"
                      key={i}
                      sx={{
                        marginBottom: '0.5rem',
                        listStyleType: 'disc',
                      }}
                    >
                      {duty}
                    </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </section>
          </Element>

          <Element name="education" className="resume-section" id="education">
            <section id="education"  className='resume-section'>
              <Typography variant="h2" gutterBottom>Education</Typography>
              {education.map((edu, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Grid container justifyContent="space-between" alignItems="flex-start">
                      <Grid item xs={12} md={8}>
                        <Typography variant="h3">{edu.degree}</Typography>
                        <Typography  className='subtitle1' gutterBottom>{edu.institution}</Typography>
                        <Box component="ul" sx={{ paddingLeft: '0px',color:"#2f3542" }}>
                            <Box
                            component="li"
                            sx={{
                              marginBottom: '0.2rem',
                              listStyleType: 'none',
                            }}
                          >
                            {edu.location}
                          </Box>
                          <Box
                            component="li"
                            sx={{
                              marginBottom: '0.5rem',
                              listStyleType: 'none',
                            }}
                          >
                            {edu.grade}
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4} sx={{textAlign: {md: 'right'}}}>
                      <Typography className="experience-period" sx={{ background: theme.customGradients.secondary,WebkitTextFillColor:'#00000000',WebkitBackgroundClip:'text',fontWeight:"bold" }}>{edu.period}</Typography>
                      </Grid>
                  </Grid>
                </Box>
              ))}
            </section>
          </Element>

          <Element name="project highlights" className="resume-section" id="projects">
            <section id="Project Highlights"  className='resume-section'>
              <Typography variant="h2" gutterBottom>Project Highlights</Typography>
              {projects.map((project, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Typography variant="h3">{project.title}</Typography>
                  <Typography  className='subtitle1' gutterBottom>{project.tech}</Typography>
                  {project.description && <Typography variant="body1" paragraph className="experience-period">{project.description}</Typography>}
                  <Box component="ul" sx={{ paddingLeft: '25px',color:"#2f3542" }}>
                    {project.highlights.map((highlight, i) => (
                      <Box
                      component="li"
                      key={i}
                      sx={{
                        marginBottom: '0.5rem',
                        listStyleType: 'disc',
                      }}
                    >
                      {highlight}
                    </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </section>
          </Element>

         
          
          
          

          

          

        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Resume;