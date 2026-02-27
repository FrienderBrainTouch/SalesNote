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
        <div className="mobile-section center-text">
          <div className="badge">📞 수신 전화</div>
          <div className="profile-main mobile">
            <div className="avatar-large">홍</div>
            <div>
              <div className="profile-name">홍길동</div>
              <div className="profile-meta">삼성전자 / 부장 · ⭐ VIP</div>
              <div className="profile-phone">010-1234-5678</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">📋 최근 통화 요약</div>
          <ul className="bullet-list compact">
            <li>02.15 — 계약 서류 검토 후 재연락 협의. 예산 3천만원 내외.</li>
            <li>02.08 — 신규 상품 소개, 내부 검토 필요 언급.</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">📝 메모</div>
          <ul className="bullet-list compact">
            <li>골프 좋아함</li>
            <li>점심 한식 선호</li>
            <li>가격에 민감한 편</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">📅 다음 예정 일정</div>
          <div className="pill">2024.02.22 계약 미팅</div>
        </div>

        <div className="mobile-actions">
          <button className="call-accept" type="button">
            📞 받기
          </button>
          <button className="call-decline" type="button">
            ❌ 거절
          </button>
        </div>
        <button className="ghost-button full" type="button">
          🔇 무음으로 받기
        </button>
      </PhoneFrame>

      {/* 앱에서 직접 통화 걸기 */}
      <PhoneFrame title="통화 전 브리핑 (발신)">
        <div className="mobile-header-row">
          <span>← 뒤로</span>
          <span className="mobile-header-name">홍길동</span>
          <span className="link-text">편집</span>
        </div>

        <div className="profile-main mobile">
          <div className="avatar-large">홍</div>
          <div>
            <div className="profile-name">홍길동</div>
            <div className="profile-meta">삼성전자 / 부장 · ⭐ VIP</div>
          </div>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">📋 최근 통화 (02.15)</div>
          <p className="mobile-paragraph">
            계약 서류 검토 후 재연락 협의. 예산 3천만원 내외.
          </p>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">📝 고정 메모</div>
          <ul className="bullet-list compact">
            <li>골프 좋아함</li>
            <li>가격에 민감한 편</li>
          </ul>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">✅ 미완료 액션 아이템</div>
          <ul className="checklist compact">
            <li>☐ 계약서 초안 발송</li>
            <li>☐ 견적서 재작성</li>
          </ul>
        </div>

        <div className="mobile-bottom">
          <button className="primary-button full" type="button">
            📞 통화 걸기
          </button>
          <div className="helper-text">통화 시작 시 자동 녹음됩니다</div>
        </div>
      </PhoneFrame>

      {/* 통화 중 */}
      <PhoneFrame title="통화 중 화면">
        <div className="mobile-section center-text">
          <div className="badge recording">통화 중 🔴 REC 00:03:42</div>
          <div className="profile-main mobile center-text">
            <div className="avatar-large">홍</div>
            <div>
              <div className="profile-name">홍길동</div>
              <div className="profile-phone">010-1234-5678</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">📝 빠른 메모</div>
          <textarea
            className="memo-input"
            placeholder="통화 중 메모 입력..."
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
          <div className="section-title-inline">📋 참고 (이전 요약)</div>
          <p className="mobile-paragraph">
            예산 3천만원. 02.22 미팅 예정.
          </p>
        </div>

        <div className="mobile-bottom column">
          <button className="call-end" type="button">
            🔴 통화 종료
          </button>
          <div className="dual-actions">
            <button className="secondary-button" type="button">
              🔇 음소거
            </button>
            <button className="secondary-button" type="button">
              🔊 스피커
            </button>
          </div>
        </div>
      </PhoneFrame>

      {/* 통화 후 알림 */}
      <PhoneFrame title="통화 후 · AI 분석 완료">
        <div className="mobile-section">
          <div className="badge success">✅ AI 분석 완료</div>
          <div className="mobile-meta">홍길동 · 8분 23초</div>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">📌 요약</div>
          <p className="mobile-paragraph">
            계약 서류 검토 완료. 예산 3천만원으로 최종 협의. 02.22 오전 미팅 확정.
          </p>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">🗓️ 감지된 일정</div>
          <p className="mobile-paragraph">2024.02.22 오전 10시 미팅</p>
          <button className="primary-button full" type="button">
            ✓ 캘린더 등록
          </button>
        </div>

        <div className="divider" />

        <div className="mobile-section">
          <div className="section-title-inline">✅ 액션 아이템</div>
          <ul className="checklist compact">
            <li>☐ 계약서 초안 발송</li>
            <li>☐ 견적서 3천만원 기준</li>
          </ul>
        </div>

        <div className="mobile-bottom column">
          <button className="secondary-button full" type="button">
            전체 분석 보기
          </button>
          <button className="primary-button full" type="button">
            확인
          </button>
        </div>
      </PhoneFrame>
    </div>
  );
};

