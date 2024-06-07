export default function Lanyard() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="150" fill="rgb(241 245 249)" />
      <path d="M0,0 C50,50 50,50 100,100 C150,50 150,50 200,0" fill="none" stroke="rgb(250 204 21)" strokeWidth="10" />
      <polygon points="50,130 150,130 180,150 20,150" fill="#fff" />
      <rect x="75" y="135" width="50" height="10" rx="5" ry="5" fill="#E0E0E0" />
      <polygon points="110,109 90,109 85,135 115,135" fill="#C0C0C0" />
      <path d="M5,15 A5,5 0 0,1 15,15" fill="none" stroke="#C0C0C0" strokeWidth="1" transform="translate(90, 94)" />
      <circle cx="60" cy="140" r="4" fill="rgb(250 204 21)" />
      <circle cx="140" cy="140" r="4" fill="rgb(250 204 21)" />
    </svg>
  );
}
