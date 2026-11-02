"use client";

import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAppTheme } from "@/components/theme-provider";

const Page = styled.main`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.page};
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.2s ease, color 0.2s ease;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeaderInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 18px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #0f172a);
  color: white;
  font-weight: 800;
  letter-spacing: -0.08em;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => theme.colors.muted};
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
  }
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 28px 28px 64px;
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 22px;
  margin-bottom: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HeroCard = styled(Card)`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.06), rgba(148, 163, 184, 0.04));
`;

const Eyebrow = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const H1 = styled.h1`
  margin: 0 0 16px;
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.06em;
  max-width: 660px;
`;

const Muted = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
  font-size: 15px;
`;

const CTA = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
`;

const StatStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 24px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 16px;
`; 

const StatValue = styled.div`
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.05em;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
  margin-top: 4px;
`;

const SidePanel = styled(Card)`
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const MiniTitle = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 800;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.secondary};
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #38bdf8);
  color: white;
  display: grid;
  place-items: center;
  font-weight: 800;
`;

const ProfileName = styled.div`
  font-weight: 800;
  margin-bottom: 2px;
`;

const List = styled.div`
  display: grid;
  gap: 12px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
`;

const Section = styled.section`
  margin-top: 32px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
  flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 26px;
  letter-spacing: -0.05em;
`;

const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CourseList = styled.div`
  display: grid;
  gap: 16px;
`;

const CourseRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 14px;
  align-items: center;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const CourseMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CourseIcon = styled.div<{ $tone: string }>`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: ${(props) => props.$tone};
  font-size: 22px;
`;

const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $value: number }>`
  width: ${(props) => props.$value}%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, #38bdf8);
`;

const RightRail = styled.div`
  display: grid;
  gap: 18px;
`;

const Timeline = styled.div`
  display: grid;
  gap: 12px;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin-top: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 5px rgba(37, 99, 235, 0.12);
`;

const GradeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const GradeCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Footer = styled.footer`
  margin-top: 32px;
  padding: 18px 0 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 13px;
`;

const courseData = [
  { title: "Pemrograman Web Lanjut", lecturer: "M. Rizal, M.Kom", room: "R.204", progress: 78, icon: "💻", tone: "#e0f2fe" },
  { title: "Sistem Basis Data", lecturer: "Nia Rahayu, S.Kom", room: "Lab. DB", progress: 65, icon: "🗃️", tone: "#dcfce7" },
  { title: "Desain UI/UX", lecturer: "Dewi Anggraini, M.Ds", room: "Studio 3", progress: 84, icon: "🎨", tone: "#f3e8ff" },
];

const agenda = [
  { time: "08:00", title: "Kelas Pemrograman Web Lanjut", detail: "R.204 · Tatap muka" },
  { time: "10:30", title: "Diskusi Proyek UI/UX", detail: "Studio 3 · Kelompok 5" },
  { time: "13:00", title: "Pengumpulan Tugas Basis Data", detail: "Deadline 17.00" },
];

const quickAccess = [
  { label: "Kelas Saya", value: "12" },
  { label: "Tugas", value: "07" },
  { label: "Nilai", value: "A" },
];

export default function Home() {
  const { mode, toggleTheme } = useAppTheme();

  return (
    <Page>
      <Header>
        <HeaderInner>
          <Brand>
            <Logo>ST</Logo>
            <BrandText>
              <strong>STIKOM Banyuwangi</strong>
              <span style={{ color: "#64748b", fontSize: 12 }}>Learning Management System</span>
            </BrandText>
          </Brand>

          <Nav>
            <a href="#beranda">Beranda</a>
            <a href="#matakuliah">Mata Kuliah</a>
            <a href="#jadwal">Jadwal</a>
            <a href="#nilai">Nilai</a>
          </Nav>

          <Button variant="secondary" size="md" onClick={toggleTheme}>
            {mode === "light" ? "☾ Dark mode" : "☀ Light mode"}
          </Button>
        </HeaderInner>
      </Header>

      <Container id="beranda">
        <Hero>
          <HeroCard padding="lg">
            <Eyebrow>Portal Akademik</Eyebrow>
            <H1>Selamat datang di ruang belajar digital STIKOM Banyuwangi.</H1>
            <Muted>
              Ikuti materi, akses tugas, dan pantau perkembangan akademik Anda dengan dashboard yang modern,
              cepat, dan terstruktur seperti platform kelas digital kampus.
            </Muted>

            <CTA>
              <Button>Masuk Kelas</Button>
              <Button variant="outline">Lihat Jadwal</Button>
            </CTA>

            <StatStrip>
              <StatCard>
                <StatValue>12</StatValue>
                <StatLabel>Mata Kuliah</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>07</StatValue>
                <StatLabel>Tugas Aktif</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>3.8</StatValue>
                <StatLabel>IPK Semester</StatLabel>
              </StatCard>
            </StatStrip>
          </HeroCard>

          <SidePanel>
            <MiniTitle>Mahasiswa</MiniTitle>

            <ProfileCard>
              <Avatar>AR</Avatar>
              <div>
                <ProfileName>Ayu Ristiani</ProfileName>
                <div style={{ color: "#64748b", fontSize: 12 }}>2025/214001</div>
              </div>
            </ProfileCard>

            <div>
              <MiniTitle>Ringkasan</MiniTitle>
              <List style={{ marginTop: 10 }}>
                {quickAccess.map((item) => (
                  <ListItem key={item.label}>
                    <span>{item.label}</span>
                    <Badge variant={item.label === "Nilai" ? "success" : "default"}>{item.value}</Badge>
                  </ListItem>
                ))}
              </List>
            </div>
          </SidePanel>
        </Hero>

        <Section id="matakuliah">
          <SectionHeader>
            <SectionTitle>Mata Kuliah Saya</SectionTitle>
            <Badge variant="success">Semester Ganjil</Badge>
          </SectionHeader>

          <GridTwo>
            <CourseList>
              {courseData.map((course) => (
                <CourseRow key={course.title}>
                  <CourseMeta>
                    <CourseIcon $tone={course.tone}>{course.icon}</CourseIcon>
                    <div>
                      <div style={{ fontWeight: 800, marginBottom: 4 }}>{course.title}</div>
                      <div style={{ color: "#64748b", fontSize: 13 }}>{course.lecturer}</div>
                    </div>
                  </CourseMeta>

                  <ProgressWrap>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, color: "#64748b" }}>{course.room}</span>
                      <span style={{ fontSize: 12, fontWeight: 700 }}>{course.progress}%</span>
                    </div>
                    <ProgressBar>
                      <ProgressFill $value={course.progress} />
                    </ProgressBar>
                  </ProgressWrap>
                </CourseRow>
              ))}
            </CourseList>

            <RightRail>
              <Card padding="lg">
                <MiniTitle>Agenda Hari Ini</MiniTitle>
                <Timeline style={{ marginTop: 16 }}>
                  {agenda.map((item) => (
                    <TimelineItem key={item.time}>
                      <Dot />
                      <div>
                        <div style={{ fontWeight: 800, marginBottom: 4 }}>{item.time}</div>
                        <div style={{ fontWeight: 700 }}>{item.title}</div>
                        <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>{item.detail}</div>
                      </div>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Card>
            </RightRail>
          </GridTwo>
        </Section>

        <Section id="jadwal">
          <SectionHeader>
            <SectionTitle>Jadwal Kuliah</SectionTitle>
            <Button variant="secondary" size="sm">Lihat Kalender</Button>
          </SectionHeader>

          <GridTwo>
            <Card padding="lg">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <div>
                  <div style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 800 }}>
                    Senin
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.05em", marginTop: 6 }}>12 Nov 2026</div>
                </div>
                <Badge>Jadwal aktif</Badge>
              </div>

              <List>
                <ListItem>
                  <span>08.00 - 10.00</span>
                  <strong>Pemrograman Web</strong>
                </ListItem>
                <ListItem>
                  <span>10.30 - 12.00</span>
                  <strong>Basis Data</strong>
                </ListItem>
                <ListItem>
                  <span>13.30 - 15.00</span>
                  <strong>UI/UX</strong>
                </ListItem>
              </List>
            </Card>

            <Card padding="lg">
              <MiniTitle>Pengumuman</MiniTitle>
              <List style={{ marginTop: 16 }}>
                <ListItem>
                  <div>
                    <div style={{ fontWeight: 800 }}>Workshop UI/UX</div>
                    <div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>Diumumkan 2 hari lalu</div>
                  </div>
                  <Badge variant="warning">Baru</Badge>
                </ListItem>
                <ListItem>
                  <div>
                    <div style={{ fontWeight: 800 }}>Pendaftaran PKL</div>
                    <div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>Batas 18 November</div>
                  </div>
                  <Badge variant="danger">Perhatian</Badge>
                </ListItem>
              </List>
            </Card>
          </GridTwo>
        </Section>

        <Section id="nilai">
          <SectionHeader>
            <SectionTitle>Rekap Nilai</SectionTitle>
            <Badge variant="success">Semester 5</Badge>
          </SectionHeader>

          <GradeGrid>
            <GradeCard padding="lg">
              <div style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 800 }}>Pemrograman Web</div>
              <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.05em" }}>A</div>
              <div style={{ color: "#64748b", fontSize: 13 }}>Nilai akhir: 92</div>
            </GradeCard>
            <GradeCard padding="lg">
              <div style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 800 }}>Basis Data</div>
              <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.05em" }}>A-</div>
              <div style={{ color: "#64748b", fontSize: 13 }}>Nilai akhir: 89</div>
            </GradeCard>
            <GradeCard padding="lg">
              <div style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 800 }}>UI/UX</div>
              <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.05em" }}>A</div>
              <div style={{ color: "#64748b", fontSize: 13 }}>Nilai akhir: 95</div>
            </GradeCard>
          </GradeGrid>
        </Section>

        <Footer>STIKOM PGRI Banyuwangi • Portal Akademik Mahasiswa • 2026</Footer>
      </Container>
    </Page>
  );
}