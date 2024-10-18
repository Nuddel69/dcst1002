import Sidebar from './components/Sidebar';
import TextContent from './components/TextContent';
import ImageContent from './components/ImageContent';
import VideoContent from './components/VideoContent';
import Quiz from './components/Quiz';

function App() {
  const sidebarItems = [
    { title: 'Forside', link: '/' },
    { title: 'Folk med onde hensikter', link: '/folk-med-onde-hensikter' },
    { title: 'Rare/mystiske/ukjente lenker', link: '/lenker' },
    { title: 'Phishing', link: '/phishing' },
    { title: 'Gode passord', link: '/passord' },
  ];

  const content = (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ul>
        <li>Listeelement 1</li>
        <li>Listeelement 2</li>
        <li>Listeelement 3</li>
      </ul>
      <p>
        Morbi ultricies augue a turpis hendrerit.{' '}
        <a href="#">Les mer her</a>.
      </p>
    </>
  );

  const quizQuestion = 'Hvem er lærer i DCST1002';
  const quizOptions = [
    { id: 1, label: 'Børge', isCorrect: true },
    { id: 2, label: 'Tor Ivar', isCorrect: false, explanation: 'Tor Ivar er lærer i DCST1001' },
    { id: 3, label: 'Rivertz', isCorrect: false, explanation: 'Rivertz er lærer i DCST1004' },
  ];

  return (
    <div className="App" style={{ marginLeft: '0.5em', display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar items={sidebarItems} />

      {/* Main Content */}
      <div style={{ marginLeft: '240px', padding: '20px', width: '100%' }}>
        <h1>Læringsmateriale i DCST1002</h1>
        <p>Nettside for 5-7 klasse</p>
        <TextContent title="Kapitteloverskrift" content={content} />
        <ImageContent
          title="Testbilde"
          src="https://unsplash.it/400/200"
          alt="Placeholder Image"
        />
          <VideoContent
          title="Opplæringsvideo"
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
        />
        <Quiz question={quizQuestion} options={quizOptions} />
      </div>
    </div>
  )
}

export default App
