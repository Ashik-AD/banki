type Props = {
  className?: string;
  iconColor?: string;
  logoClass?: string;
  signalClass?: string;
  chipClass?: string;
};
export default function CreditCard(
  props: Props,
) {
  const { className, iconColor, logoClass, signalClass, chipClass } = props;
  return (
    <article
      className={`flex flex-col gap-8 px-4 py-6 md:pt-9 md:pr-9 md:pb-9 md:pl-[3.5rem] border-2 border-white rounded-[2rem] overflow-hidden ${
        className ? className : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <svg
          className={`${logoClass ? logoClass : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="35"
          viewBox="0 0 60 35"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.9838 30.3621C33.4461 27.1798 35.6162 22.6144 35.6162 17.541C35.6162 12.4676 33.4461 7.90225 29.9838 4.71999C33.083 1.87176 37.2194 0.131622 41.7607 0.131622C51.3755 0.131622 59.1701 7.92625 59.1701 17.541C59.1701 27.1558 51.3755 34.9504 41.7607 34.9504C37.2194 34.9504 33.083 33.2103 29.9838 30.3621ZM29.9838 30.3621C26.8845 33.2103 22.7482 34.9504 18.2068 34.9504C8.59205 34.9504 0.797424 27.1558 0.797424 17.541C0.797424 7.92625 8.59205 0.131622 18.2068 0.131622C22.7482 0.131622 26.8845 1.87176 29.9838 4.71999C26.5215 7.90225 24.3513 12.4676 24.3513 17.541C24.3513 22.6144 26.5215 27.1798 29.9838 30.3621Z"
            fill={iconColor ? iconColor : "white"}
          />
        </svg>
        <svg
          className={signalClass ? signalClass : ""}
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="47"
          viewBox="0 0 27 47"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5443 0.469159C16.357 -0.11168 17.4867 0.0763063 18.0676 0.889038C21.1603 5.21653 24.8493 12.5973 25.9306 20.8184C27.0193 29.0957 25.4657 38.336 17.8834 46.0187C17.1817 46.7297 16.0365 46.7372 15.3255 46.0355C14.6145 45.3338 14.6069 44.1886 15.3086 43.4776C21.9216 36.7771 23.3254 28.7517 22.344 21.2901C21.3551 13.7723 17.9464 6.94105 15.1244 2.99244C14.5436 2.17971 14.7316 1.05 15.5443 0.469159ZM7.70415 7.10286C8.51601 6.52081 9.646 6.70712 10.228 7.51899C12.4112 10.5642 15.009 15.7436 15.7721 21.5273C16.5428 27.368 15.4432 33.9345 10.0434 39.3886C9.34059 40.0985 8.19536 40.1042 7.48546 39.4014C6.77557 38.6986 6.76983 37.5534 7.47265 36.8435C11.9004 32.3711 12.8482 27.0218 12.1857 22.0005C11.5156 16.9222 9.19965 12.2932 7.28801 9.62676C6.70597 8.81489 6.89228 7.6849 7.70415 7.10286ZM1.66796 14.3429C2.47705 13.757 3.60791 13.938 4.19381 14.7471C5.38588 16.3933 6.79552 19.1721 7.21226 22.2991C7.63695 25.4857 7.03025 29.1375 4.00781 32.16C3.30144 32.8663 2.15619 32.8663 1.44983 32.16C0.743461 31.4536 0.743461 30.3083 1.44983 29.602C3.49192 27.5599 3.94033 25.1322 3.62644 22.777C3.30461 20.3621 2.18198 18.1367 1.26382 16.8688C0.677927 16.0597 0.858865 14.9288 1.66796 14.3429Z"
            fill={iconColor ? iconColor : "white"}
          />
        </svg>
      </div>
      <div className="credit__pin">
        <span className="text-[#B9BEBD]">Credit Card No.</span>
        <div className="pins text-l font-bold flex gap-x-4 mt-4 lg:text-xl md:gap-x-4">
          <span>3232</span>
          <span>2020</span>
          <span>2022</span>
          <span>2023</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-11">
          <span className="flex flex-col gap-2">
            <span className="font-semibold text-[#B9BEBD]">Name</span>
            <span className="font-medium uppercase">Erica Erica</span>
          </span>
          <span className="flex flex-col gap-2">
            <span className="font-semibold text-[#B9BEBD]">Exp.</span>
            <span className="font-medium uppercase">2050</span>
          </span>
        </div>
        <svg
          className={chipClass ? chipClass : ""}
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="48"
          viewBox="0 0 59 48"
          fill="none"
        >
          <path
            d="M0.11438 2.50602C0.11438 1.62188 0.831112 0.905151 1.71524 0.905151L15.3226 0.905151C16.2067 0.905151 16.9235 1.62188 16.9235 2.50602V12.7013C16.9235 13.3188 16.5683 13.8812 16.0109 14.1466L9.20719 17.3865C8.77177 17.5938 8.26608 17.5938 7.83066 17.3865L1.02698 14.1466C0.469494 13.8812 0.11438 13.3188 0.11438 12.7013L0.11438 2.50602Z"
            fill={iconColor ? iconColor : "white"}
          />
          <path
            d="M25.7282 2.50602C25.7282 1.62188 26.445 0.905151 27.3291 0.905151L31.3312 0.905151C32.2154 0.905151 32.9321 1.62188 32.9321 2.50602V5.70775C32.9321 6.59188 32.2154 7.30861 31.3312 7.30861L27.3291 7.30861C26.445 7.30861 25.7282 6.59188 25.7282 5.70775V2.50602Z"
            fill={iconColor ? iconColor : "white"}
          />
          <path
            d="M41.7369 2.50602C41.7369 1.62188 42.4536 0.905151 43.3377 0.905151L56.9451 0.905151C57.8292 0.905151 58.5459 1.62188 58.5459 2.50602V12.1112C58.5459 12.9953 57.8292 13.7121 56.9451 13.7121L43.3377 13.7121C42.4536 13.7121 41.7369 12.9953 41.7369 12.1112V2.50602Z"
            fill={iconColor ? iconColor : "white"}
          />
          <path
            d="M0.11438 19.3151C0.11438 18.431 0.831112 17.7142 1.71524 17.7142L15.3226 17.7142C16.2067 17.7142 16.9235 18.431 16.9235 19.3151V28.9203C16.9235 29.8044 16.2067 30.5212 15.3226 30.5212L1.71524 30.5212C0.831111 30.5212 0.11438 29.8044 0.11438 28.9203L0.11438 19.3151Z"
            fill={iconColor ? iconColor : "white"}
          />
          <path
            d="M20.9256 12.9116C20.9256 12.0275 21.6424 11.3108 22.5265 11.3108L36.1338 11.3108C37.018 11.3108 37.7347 12.0275 37.7347 12.9116L37.7347 35.3237C37.7347 36.2079 37.018 36.9246 36.1338 36.9246L22.5265 36.9246C21.6424 36.9246 20.9256 36.2079 20.9256 35.3237L20.9256 12.9116Z"
            fill={iconColor ? iconColor : "white"}
          />
          <path
            d="M41.7369 19.3151C41.7369 18.431 42.4536 17.7142 43.3377 17.7142H56.9451C57.8292 17.7142 58.5459 18.431 58.5459 19.3151L58.5459 28.9203C58.5459 29.8044 57.8292 30.5212 56.9451 30.5212H43.3377C42.4536 30.5212 41.7369 29.8044 41.7369 28.9203L41.7369 19.3151Z"
            fill={iconColor ? iconColor : "white"}
          />
          <path
            d="M0.11438 36.1242C0.11438 35.24 0.831112 34.5233 1.71524 34.5233H15.3226C16.2067 34.5233 16.9235 35.24 16.9235 36.1242L16.9235 45.7294C16.9235 46.6135 16.2067 47.3302 15.3226 47.3302H1.71524C0.831111 47.3302 0.11438 46.6135 0.11438 45.7294L0.11438 36.1242Z"
            fill={iconColor ? iconColor : "white"}
          />
          <path
            d="M25.7282 42.5276C25.7282 41.6435 26.445 40.9268 27.3291 40.9268H31.3312C32.2154 40.9268 32.9321 41.6435 32.9321 42.5276V45.7294C32.9321 46.6135 32.2154 47.3302 31.3312 47.3302H27.3291C26.445 47.3302 25.7282 46.6135 25.7282 45.7294V42.5276Z"
            fill={iconColor ? iconColor : "white"}
          />
          <path
            d="M41.7369 35.5341C41.7369 34.9166 42.092 34.3542 42.6495 34.0887L49.4531 30.8489C49.8886 30.6416 50.3943 30.6416 50.8297 30.8489L57.6333 34.0887C58.1908 34.3542 58.5459 34.9166 58.5459 35.5341V45.7294C58.5459 46.6135 57.8292 47.3302 56.9451 47.3302H43.3377C42.4536 47.3302 41.7369 46.6135 41.7369 45.7294V35.5341Z"
            fill={iconColor ? iconColor : "white"}
          />
        </svg>
      </div>
    </article>
  );
}
