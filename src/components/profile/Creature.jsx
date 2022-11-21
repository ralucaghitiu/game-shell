import { css, keyframes } from '@emotion/css';
import { useSelector } from 'react-redux';

export const Creature = () => {
  // reselect -> ships with rtk
  const { mainColor, eyeColor, secondaryColor } = useSelector(({ profile }) => {
    const { mainColor, eyeColor, secondaryColor } = profile.creature;

    return { mainColor, eyeColor, secondaryColor };
  });

  const blink = keyframes`
  from, 0%, 50%, 100%, to {
    transform: translateY(0);
  }
  25% {
          transform: translateY(35px);
        }
  `;

  const cssBlink = css`
    animation: ${blink} 3s forwards linear infinite;
  `;

  const cssClass = css`
    padding-top: 18px;

    .creature {
      position: relative;
      margin-top: 15px;
      margin-left: 15px;
      padding: 10px;
      border: 3px solid ${secondaryColor};
      border-radius: 30px;
      background-color: ${mainColor};
      width: 220px;
      height: 160px;
    }

    .creature_eyes {
      position: relative;
      margin-top: 50px;
    }

    .eye {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      width: 35px;
      background-color: #fff;
      top: -10px;
      overflow: hidden;
      border-radius: 50%;
    }

    .creature__eye {
      position: absolute;
    }

    .creature__left_eye {
      left: 50px;
    }

    .creature__right_eye {
      right: 50px;
    }

    .eye__iris {
      background-color: ${eyeColor};
      height: 8px;
      width: 8px;
      border-radius: 50%;
    }

    .eyelid {
      position: absolute;
      background-color: ${secondaryColor};
      width: 35px;
      height: 35px;
      top: -35px;
    }

    .creature__nose {
      margin-top: 12px;
    }

    .nose {
      background-color: ${secondaryColor};
      position: relative;
      border-radius: 20px;
      top: 12px;
      margin: 0 auto;
      width: 60px;
      height: 50px;
    }

    .nose__nostril {
      background-color: ${mainColor};
      position: absolute;
      border-radius: 50%;
      height: 8px;
      width: 8px;
      top: 20px;
    }

    .nose__nostril_left {
      left: 16px;
    }

    .nose__nostril_right {
      right: 16px;
    }
  `;

  return (
    <div className={cssClass}>
      <div className="creature">
        <div className="creature_eyes">
          <div className="eye creature__eye creature__left_eye">
            <div className="eye__iris"></div>
            <div className={`eyelid ${cssBlink}`}></div>
          </div>

          <div className="eye creature__eye creature__right_eye">
            <div className="eye__iris"></div>
            <div className={`eyelid ${cssBlink}`}></div>
          </div>
        </div>

        <div className="creature__nose">
          <div className="nose">
            <div className="nose__nostril nose__nostril_left"></div>
            <div className="nose__nostril nose__nostril_right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
