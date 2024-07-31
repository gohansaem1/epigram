'use client';
/**
 * @isOpen - 모달의 표시여부를 나타냄
 * @onClose - 모달을 닫는 함수로 배경 클릭하면 호출됨
 * @message - 모달창에 들어갈 메시지
 * @buttons - 모달창에 들어갈 버튼
 * 
 * 사용예제
 * <Modal
    isOpen={isModal}
    onClose={() => setIsModal(false)}
    message="댓글을 삭제하시겠어요?"
    buttons={[
      {
        text: '취소',
        onClick: () => setIsModal(false),
        type: 'secondary',
      },
      {
        text: '삭제하기',
        onClick: () => setIsModal(false),

        type: 'primary',
      },
    ]}
  />
 * 
 * 
 */

import { ModalProps } from '@/types/modal';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  message,
  buttons,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black-950/60"
      onClick={onClose}
    >
      <div
        className="w-[320px] rounded-[24px] bg-white px-[38px] py-[40px] text-center md:w-[372px] lg:w-[452px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h1 className="text-black mb-[48px] text-xl font-semibold md:text-2xl lg:text-[24px]">
            {message}
          </h1>
          <div className="flex items-center justify-center gap-4">
            {buttons.map((button, index) => (
              <button
                className={`w-full rounded-[12px] p-4 text-xl lg:text-2xl ${button.type === 'primary' ? `bg-blue-900 text-white` : button.type === 'secondary' ? `text-black bg-blue-200` : `bg-blue-900 text-white`}`}
                key={index}
                onClick={button.onClick}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
