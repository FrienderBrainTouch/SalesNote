import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <div className="section-title">
    <span>{children}</span>
  </div>
);

export const WebLayout = () => {
  return (
    <div className="web-layout">
      <header className="web-topbar">
        <div className="web-topbar-left">
          <span className="web-logo">SalesNote</span>
          <span className="web-topbar-sep" />
          <span className="web-topbar-sub">영업 노트</span>
        </div>
        <div className="web-top-actions">
          <input
            className="top-search"
            placeholder="Q 이름 검색"
            readOnly
          />
          <button className="topbar-secondary-btn" type="button">
            알림
          </button>
          <div className="avatar">SJ</div>
        </div>
      </header>

      <div className="web-body">
        {/* 좌측 고정 고객 패널 */}
        <aside className="left-panel">
          <div className="profile-main">
            <div className="avatar-large">준</div>
            <div>
              <div className="profile-name">김준영</div>
              <div className="profile-meta">한솔제지 영업1팀 / 차장</div>
              <div className="profile-badge vip">VIP</div>
              <div className="profile-phone">010-2847-5193</div>
            </div>
          </div>

          <div className="divider" />

          <SectionTitle>메모</SectionTitle>
          <ul className="bullet-list">
            <li>골프 치시는 분, 동호회 얘기 나왔음</li>
            <li>점심은 한식 선호 (정갈한 곳 좋아하심)</li>
            <li>결재는 팀장님 통해서 나옴</li>
            <li>단가 이야기할 땐 여유 두고 하는 게 좋음</li>
          </ul>
          <button className="ghost-button" type="button">
            + 메모 추가
          </button>

          <div className="divider" />

          <SectionTitle>다음 일정</SectionTitle>
          <div className="schedule-list">
            <div className="schedule-item">
              <div className="schedule-date">2024.02.22 (목) 오전 10:00</div>
              <div className="schedule-label">계약 미팅</div>
            </div>
            <div className="schedule-item">
              <div className="schedule-date">2024.02.28</div>
              <div className="schedule-label">재연락 예정</div>
            </div>
          </div>

          <div className="divider" />

          <SectionTitle>통화 통계</SectionTitle>
          <div className="stats">
            <div className="stats-row">
              <span>총 통화</span>
              <strong>12회</strong>
            </div>
            <div className="stats-row">
              <span>평균 통화 시간</span>
              <strong>6분 42초</strong>
            </div>
            <div className="stats-row column">
              <span>감정 추이</span>
              <div className="trend-chart">
                <div className="trend-bar positive" />
                <div className="trend-bar neutral" />
                <div className="trend-bar negative" />
              </div>
            </div>
          </div>
        </aside>

        {/* 우측 통화 타임라인 */}
        <section className="right-panel">
          <div className="right-header">
            <div className="right-title">통화 기록</div>
            <button className="primary-button" type="button">
              새 통화 예약
            </button>
          </div>

          <div className="right-grid">
            <div className="timeline-col">
              <div className="keyword-row">
                <div className="keyword-title">주요 키워드</div>
                <div className="chip-row">
                  <span className="chip">계약</span>
                  <span className="chip">견적</span>
                  <span className="chip">예산 3천</span>
                  <span className="chip">미팅 일정</span>
                  <span className="chip">서류 검토</span>
                </div>
              </div>

              <div className="call-list timeline-list">
                <div className="call-card selected">
                  <div className="call-meta">
                    <span>2024.02.15 (목) 14:32</span>
                    <span className="call-duration">8분 23초</span>
                  </div>
                  <p className="call-quote">
                    서류 문제 없고, 예산 3천만원대로. 02.22 (목) 10시 미팅 확정.
                  </p>
                </div>

                <div className="call-card condensed">
                  <div className="call-meta">
                    <span>2024.02.08 (목) 11:15</span>
                    <span className="call-duration">4분 10초</span>
                  </div>
                  <p className="call-quote">
                    새 상품은 관심은 있는데, 팀에서 내부 검토 후 연락 주시기로 함.
                  </p>
                </div>
              </div>
            </div>

            <div className="detail-col">
              <div className="detail-card">
                <div className="detail-header">
                  <div className="detail-title">요약</div>
                  <button className="link-button" type="button">
                    리포트 보기
                  </button>
                </div>
                <p className="detail-paragraph">
                  서류는 큰 문제 없었고, 예산은 3천만원 선으로 진행. 2월 22일(목)
                  오전 10시에 미팅 잡고, 계약서 초안과 견적서를 메일로 다시 보내기로 함.
                </p>
              </div>

              <div className="detail-card">
                <div className="detail-title">해야 할 일</div>
                <ul className="checklist">
                  <li>☐ 계약서 초안 메일로 보내기</li>
                  <li>☐ 견적서 3천만원 기준으로 다시 보내기</li>
                  <li>☐ 일정 초대 메일 발송</li>
                </ul>
              </div>

              <div className="detail-card">
                <div className="detail-title">나온 일정</div>
                <div className="detail-row">
                  <span className="badge-soft">02.22 (목)</span>
                  <span className="badge-soft">10:00</span>
                  <span>계약 미팅</span>
                </div>

                <div className="schedule-confirm compact">
                  <div className="schedule-text">
                    <div className="schedule-title">캘린더에 등록할까요?</div>
                    <label className="form-row">
                      <span>제목</span>
                      <input
                        readOnly
                        value="계약 미팅 - 김준영"
                        className="text-input"
                      />
                    </label>
                    <label className="form-row">
                      <span>시간</span>
                      <input readOnly value="오전 10:00" className="text-input" />
                    </label>
                  </div>
                  <div className="schedule-actions">
                    <button className="primary-button" type="button">
                      등록
                    </button>
                    <button className="secondary-button" type="button">
                      나중에
                    </button>
                  </div>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-title">통화 기록</div>
                <div className="utterance-scroll">
                  <div className="utterance-list">
                    <div className="utterance-row">
                    <span className="speaker-dot s1" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>영업</strong>
                        <span>00:12</span>
                      </div>
                      <div className="utterance-text">
                        김 차장님, 서류 쪽 정리해서 다시 연락드렸어요.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s2" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>김준영</strong>
                        <span>00:24</span>
                      </div>
                      <div className="utterance-text">
                        서류는 검토해 봤는데 크게 문제될 건 없었습니다.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s1" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>영업</strong>
                        <span>01:10</span>
                      </div>
                      <div className="utterance-text">
                        예산은 3천만원 안쪽으로 진행하면 될까요?
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s2" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>김준영</strong>
                        <span>01:25</span>
                      </div>
                      <div className="utterance-text">
                        네, 3천만원 선이면 괜찮을 것 같습니다.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s1" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>영업</strong>
                        <span>01:44</span>
                      </div>
                      <div className="utterance-text">
                        옵션 들어가면 금액이 조금 달라질 수 있어서, 기준 견적부터 먼저
                        다시 보내드릴게요.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s2" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>김준영</strong>
                        <span>02:08</span>
                      </div>
                      <div className="utterance-text">
                        네, 일단 기준 견적이 있으면 내부 공유하기가 편할 것 같아요.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s1" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>영업</strong>
                        <span>02:23</span>
                      </div>
                      <div className="utterance-text">
                        다음 주에 서류 같이 보면서 한번 만나서 확정하는 게 좋을 것
                        같은데요. 시간 괜찮으실까요?
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s2" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>김준영</strong>
                        <span>02:40</span>
                      </div>
                      <div className="utterance-text">
                        화요일이나 수요일 오전이면 괜찮을 것 같습니다.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s1" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>영업</strong>
                        <span>02:40</span>
                      </div>
                      <div className="utterance-text">
                        그럼{" "}
                        <span className="stt-highlight">
                          22일 목요일 오전 10시
                        </span>
                        로 잡아둘게요. 일정 메일이랑 계약서 초안도 같이 보내드릴게요.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s2" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>김준영</strong>
                        <span>03:05</span>
                      </div>
                      <div className="utterance-text">
                        네, 목요일 10시면 괜찮습니다. 메일 주시면 확인해 볼게요.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s1" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>영업</strong>
                        <span>03:22</span>
                      </div>
                      <div className="utterance-text">
                        그럼 오늘 안으로 계약서 초안이랑 견적서 먼저 보내드리겠습니다.
                        일정 초대도 같이 드릴게요.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s2" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>김준영</strong>
                        <span>03:45</span>
                      </div>
                      <div className="utterance-text">
                        네, 감사합니다. 내부 검토 후에 추가로 질문 있으면 연락드릴게요.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s1" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>영업</strong>
                        <span>04:02</span>
                      </div>
                      <div className="utterance-text">
                        네, 편하게 주세요. 그럼 목요일에 뵙겠습니다.
                      </div>
                    </div>
                  </div>

                  <div className="utterance-row">
                    <span className="speaker-dot s2" />
                    <div className="utterance-body">
                      <div className="utterance-meta">
                        <strong>김준영</strong>
                        <span>04:10</span>
                      </div>
                      <div className="utterance-text">네, 수고하세요.</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="detail-card">
                <div className="detail-title">메모</div>
                <div className="memo-box">
                  - 결재 라인은 팀장님 확인 필요{"\n"}- 단가 이슈는 마지막에 정리{"\n"}
                  - 미팅 전에 초안/견적 먼저 전달
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

