const PhoneFrame = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="phone-frame">
    <div className="phone-notch" />
    <div className="phone-inner">
      <div className="phone-title">{title}</div>
      {children}
    </div>
  </div>
);

export const MobileScreens = () => {
  return (
    <div className="mobile-grid">
      {/* 통화 전 브리핑 */}
      <PhoneFrame title="통화 전 브리핑 (수신)">
        <div className="mobile-section">
          <div className="badge">수신 전화</div>
          <div className="profile-main mobile">
            <div className="avatar-large">준</div>
            <div>
              <div className="profile-name">김준영</div>
              <div className="profile-meta profile-meta-wrap">
                <span className="profile-company">한솔제지 영업1팀</span>
                <span className="profile-role">차장 · VIP</span>
              </div>
              <div className="profile-phone">010-2847-5193</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">최근 통화 요약</div>
          <ul className="bullet-list compact">
            <li>02.15 — 서류 괜찮고 예산 3천만원대로. 다음 주 목 10시 미팅 잡음.</li>
            <li>02.08 — 새 상품 소개했는데 내부 검토 후 연락 주시기로 함.</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">메모</div>
          <ul className="bullet-list compact">
            <li>골프 치시는 분, 동호회 얘기 나왔음</li>
            <li>점심 한식 선호 (정갈한 곳)</li>
            <li>단가 이야기할 땐 여유 두고</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">다음 예정 일정</div>
          <div className="pill">02.22 (목) 10:00 계약 미팅</div>
        </div>

        <div className="mobile-actions">
          <button className="call-accept" type="button">
            받기
          </button>
          <button className="call-decline" type="button">
            거절
          </button>
        </div>
        <button className="ghost-button full" type="button">
          무음으로 받기
        </button>
      </PhoneFrame>

      {/* 앱에서 직접 통화 걸기 */}
      <PhoneFrame title="통화 전 브리핑 (발신)">
        <div className="mobile-header-row">
          <span>← 뒤로</span>
          <span className="mobile-header-name">김준영</span>
          <span className="link-text">편집</span>
        </div>

        <div className="profile-main mobile">
          <div className="avatar-large">준</div>
          <div>
            <div className="profile-name">김준영</div>
            <div className="profile-meta profile-meta-wrap">
              <span className="profile-company">한솔제지 영업1팀</span>
              <span className="profile-role">차장 · VIP</span>
            </div>
            <div className="profile-phone">010-2847-5193</div>
          </div>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">최근 통화 (02.15)</div>
          <p className="mobile-paragraph">
            서류 괜찮고 예산 3천만원대로. 다음 주 목요일 10시 미팅 잡기로 함.
          </p>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">고정 메모</div>
          <ul className="bullet-list compact">
            <li>골프 치시는 분, 동호회 얘기 나왔음</li>
            <li>단가 이야기할 땐 여유 두고</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">미완료 액션</div>
          <ul className="checklist compact">
            <li>☐ 계약서 초안 메일로 보내기</li>
            <li>☐ 견적서 3천만원 기준으로 다시 보내기</li>
          </ul>
        </div>

        <div className="mobile-bottom">
          <button className="primary-button full" type="button">
            통화 걸기
          </button>
          <div className="helper-text">통화 시작 시 자동 녹음됩니다</div>
        </div>
      </PhoneFrame>

      {/* 통화 중 */}
      <PhoneFrame title="통화 중 화면">
        <div className="mobile-section">
          <div className="badge recording">통화 중 REC 00:03:42</div>
          <div className="profile-main mobile">
            <div className="avatar-large">준</div>
            <div>
              <div className="profile-name">김준영</div>
              <div className="profile-meta profile-meta-wrap">
                <span className="profile-company">한솔제지 영업1팀</span>
                <span className="profile-role">차장 · VIP</span>
              </div>
              <div className="profile-phone">010-2847-5193</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">빠른 메모</div>
          <textarea
            className="memo-input"
            placeholder="메모 적기..."
            readOnly
          />
          <div className="tag-row">
            <span>[#계약]</span>
            <span>[#일정]</span>
            <span>[#클레임]</span>
            <span>[#견적]</span>
            <span>[#팔로업]</span>
          </div>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">참고 (이전 요약)</div>
          <p className="mobile-paragraph">
            서류 괜찮고 예산 3천만원대로. 02.22 (목) 10시 계약 미팅 잡혀 있음.
          </p>
        </div>

        <div className="mobile-bottom column">
          <button className="call-end" type="button">
            통화 종료
          </button>
          <div className="dual-actions">
            <button className="secondary-button" type="button">
              음소거
            </button>
            <button className="secondary-button" type="button">
              스피커
            </button>
          </div>
        </div>
      </PhoneFrame>

      {/* 통화 후 알림 */}
      <PhoneFrame title="통화 후">
        <div className="mobile-header-row">
          <span>← 뒤로</span>
          <span className="mobile-header-name">김준영</span>
          <span className="link-text">편집</span>
        </div>

        <div className="profile-main mobile">
          <div className="avatar-large">준</div>
          <div>
            <div className="profile-name">김준영</div>
            <div className="profile-meta profile-meta-wrap">
              <span className="profile-company">한솔제지 영업1팀</span>
              <span className="profile-role">차장 · VIP</span>
            </div>
            <div className="profile-phone">010-2847-5193</div>
          </div>
        </div>

        <div className="summary-pill-wrap">
          <div className="summary-pill">요약</div>
        </div>
        <div className="mobile-date">2024.02.15 오후 2:32</div>

        <div className="mobile-scroll-area">
          <div className="ai-card">
            <div className="ai-card-title">계약 서류 검토 및 예산·미팅 확정</div>
            <div className="ai-card-subtitle">계약 진행 상황</div>
            <ul className="ai-bullets">
              <li>서류 검토 완료, 내부 문제 없음</li>
              <li>예산 3천만원 선으로 합의</li>
              <li>2월 22일(목) 오전 10시 미팅 일정 확정</li>
            </ul>

            <div className="ai-card-subtitle">이번 통화 후 할 일</div>
            <ul className="ai-bullets">
              <li>계약서 초안 메일 발송</li>
              <li>견적서 3천만원 기준으로 재작성 후 전달</li>
              <li>일정 초대 메일 발송</li>
            </ul>

            <div className="chip-row mobile">
              <span className="chip">계약</span>
              <span className="chip">견적</span>
              <span className="chip">미팅</span>
              <span className="chip">서류 검토</span>
            </div>
          </div>

          <div className="chat-wrap">
            <div className="bubble left">
              네, 김 차장님. 지난번에 말씀드렸던 계약 쪽 정리해서 다시 연락드렸어요.
            </div>
            <div className="bubble right">
              네, 서류 어제 받았습니다. 저희 쪽에서 검토해 봤는데 크게 문제될 건
              없었어요.
            </div>
            <div className="bubble left">
              다행이네요. 예산은 전에 말씀하신 대로 3천만원 안쪽으로 생각하고
              계시는 거죠?
            </div>
            <div className="bubble right">
              네, 3천만원 선이면 될 것 같아요. 옵션에 따라 조금 오를 수는 있을 것
              같고요.
            </div>
            <div className="bubble left">
              알겠습니다. 그럼 견적서 3천만원 기준으로 다시 잡아서 보내드릴게요.
              다음 주에 서류 같이 보면서 한번 만나서 확정하는 게 좋을 것 같은데요.
            </div>
            <div className="bubble right">
              네, 다음 주 화요일이나 수요일 오전이면 괜찮을 것 같아요.
            </div>
            <div className="bubble left">
              그럼 22일 목요일 오전 10시로 잡아 둘게요. 일정 메일이랑 계약서 초안
              같이 보내드릴게요.
            </div>
            <div className="bubble right">네, 그렇게 해 주세요.</div>
            <div className="bubble left">
              감사합니다. 자료 오늘 안으로 보내드리겠습니다.
            </div>
          </div>
        </div>

        <div className="audio-bar">
          <div className="audio-time">
            <span>01:30</span>
            <span>08:23</span>
          </div>
          <div className="audio-progress">
            <div className="audio-progress-fill" style={{ width: "18%" }} />
          </div>
          <div className="audio-controls">
            <button className="audio-btn" type="button">
              ◀◀
            </button>
            <button className="audio-btn play" type="button">
              ▶
            </button>
            <button className="audio-btn" type="button">
              ▶▶
            </button>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
};

