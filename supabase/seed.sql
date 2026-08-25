-- ============================================================
--  Seed: migrates the content that used to be hard-coded in
--  src/utils/constant.ts and src/contents/aboutPage.ts into the
--  database, so the client can edit it from the admin panel.
--
--  Generated from those files — do not hand-edit.
--  Each block only runs when its table is empty, so re-running this
--  file will never duplicate rows or overwrite the client's edits.
--  Run AFTER supabase/schema.sql.
-- ============================================================

-- ---------- FAQs (5) ----------
insert into public.faqs (question, answer, sort_order)
select * from (values
  ('What engineering services does Kallisto provide?', 'We provide planning, feasibility studies, engineering design, project supervision, GIS mapping, environmental assessments, and project management services.', 0),
  ('Which sectors do you specialize in?', 'Our expertise includes transportation, hydropower, water supply, sanitation, irrigation, urban development, buildings, environmental studies, and infrastructure planning.', 1),
  ('Do you provide Environmental Impact Assessment (EIA) services?', 'Yes. We conduct Environmental Impact Assessments (EIA), Initial Environmental Examinations (IEE), geological investigations, and environmental consulting.', 2),
  ('Do you work with government and international organizations?', 'Yes. Our clients include Government of Nepal agencies, municipalities, ADB, JICA, GIZ, and private sector organizations.', 3),
  ('Can you manage projects from survey to completion?', 'Absolutely. We offer complete project lifecycle support including survey, planning, design, supervision, monitoring, and project management.', 4)
) as seed(question, answer, sort_order)
where not exists (select 1 from public.faqs);

-- ---------- Team members (14) ----------
insert into public.team_members (name, position, qualification, experience, sort_order)
select * from (values
  ('Mr. Dipesh Aryal', 'Proprietor/Managing Director', 'BE Civil', '5 Years', 0),
  ('Mrs. Nikita Shrestha', 'Director', 'BE Civil', '5 Years', 1),
  ('Mr. Aditya Poudel', 'Sr. Engineer', 'BE Civil', '11 Years', 2),
  ('Ms. Salu Maharjan', 'Finance Manager', 'BBS', '4 Years', 3),
  ('Mr. Tika Ram Dhakal', 'Environmentalist/Forester', 'M.Sc. Forest Management', '31 Years', 4),
  ('Mr. Chan Bahadur Gurung', 'Sociologist', 'PhD Sociology', '26 Years', 5),
  ('Mr. Omkar Pandey', 'Sociologist', 'MA Sociology', '13 Years', 6),
  ('Mrs. Sharmila Giri', 'Environmental Expert', 'M.Sc. Environmental Science', '14 Years', 7),
  ('Mrs. Kabita Khanal', 'Tourism Expert', 'MA Anthropology', '19 Years', 8),
  ('Mr. Ashish Joshi', 'GIS Expert', 'Masters in Photogrammetry and Geo-informatics', '16 Years', 9),
  ('Mr. Goverdhan Pandey', 'Sr. Surveyor', 'BA', '31 Years', 10),
  ('Mr. Prakash Kadel', 'Civil Engineer', 'BE Civil', '6 Years', 11),
  ('Mr. Deepak Raj Bhatt', 'Sr. Engineer', 'BE Civil/M.Sc. Geotech', '30 Years', 12),
  ('Mr. Pursottam Yadav', 'Sub Engineer', 'Diploma in Civil Engineering', '5 Years', 13)
) as seed(name, position, qualification, experience, sort_order)
where not exists (select 1 from public.team_members);

-- ---------- Testimonials (6) ----------
insert into public.testimonials (name, role, quote, rating, sort_order)
select * from (values
  ('Department of Roads', 'Government of Nepal', 'Kallisto Engineering Consultancy delivered exceptional survey and geological investigation services for the SASEC Road Improvement Project. Their technical expertise and professionalism were commendable.', 5, 0),
  ('Dudhuvu Rural Municipality', 'Local Government Partner', 'The team completed the feasibility study and detailed design of the Dudhuwa Khola Bridge with great precision. Their commitment to quality and timely delivery made a significant impact on our community.', 5, 1),
  ('Yachiyo Engineering Co., Ltd.', 'International Partner - Japan', 'Kallisto''s socio-economic survey for the Pokhara Wastewater Management Master Plan was thorough and professional. They proved to be a reliable partner for JICA-funded projects.', 5, 2),
  ('Regional Hotel Association Nepal', 'Sauraha, Chitwan', 'Kallisto completed multiple environmental studies for our member hotels with efficiency and expertise. Their Initial Environmental Examination (IEE) and Brief Environmental Study (BES) reports were comprehensive.', 5, 3),
  ('Nepalese Army', 'Government of Nepal', 'The DGPS Survey and Detail Topographic Survey for the Kathmandu-Terai Expressway intersection area was executed with military precision. Kallisto''s surveying capabilities are top-notch.', 5, 4),
  ('GIZ Nepal', 'International Development Partner', 'Kallisto''s GIS mapping and consumer indexing for the Nalinchowk and Nagarkot feeders demonstrated their advanced technical skills and commitment to sustainable development.', 5, 5)
) as seed(name, role, quote, rating, sort_order)
where not exists (select 1 from public.testimonials);

-- Confirm what landed.
select 'faqs' as entity, count(*) from public.faqs
union all select 'team_members', count(*) from public.team_members
union all select 'testimonials', count(*) from public.testimonials;
