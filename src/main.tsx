import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Portfolio from './App.tsx'
import DesignerAgent from './DesignerAgent.tsx'
import RedditAgent from './RedditAgent.tsx'
import WsupCaseStudy from './WsupCaseStudy.tsx'
import NowggCaseStudy from './NowggCaseStudy.tsx'
import BluestacksCaseStudy from './BluestacksCaseStudy.tsx'
import GametvCaseStudy from './GametvCaseStudy.tsx'

const scrollPositions: Record<string, number> = {};

function RestoreScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    const saved = scrollPositions[pathname];
    window.scrollTo(0, saved ?? 0);
    return () => { scrollPositions[pathname] = window.scrollY; };
  }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RestoreScroll />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/designer-agent" element={<DesignerAgent />} />
        <Route path="/reddit-agent" element={<RedditAgent />} />
        <Route path="/wsup-design" element={<WsupCaseStudy />} />
        <Route path="/nowgg" element={<NowggCaseStudy />} />
        <Route path="/bluestacks" element={<BluestacksCaseStudy />} />
        <Route path="/gametv" element={<GametvCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
