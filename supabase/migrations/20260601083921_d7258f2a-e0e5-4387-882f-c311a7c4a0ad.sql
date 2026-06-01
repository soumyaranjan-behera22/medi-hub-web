-- Appointments: force status='pending' on public inserts
DROP POLICY IF EXISTS "Anyone can book an appointment" ON public.appointments;
CREATE POLICY "Anyone can book an appointment"
  ON public.appointments FOR INSERT
  TO anon, authenticated
  WITH CHECK (status = 'pending');

-- Enquiries: force is_read=false on public inserts
DROP POLICY IF EXISTS "Anyone can send enquiry" ON public.enquiries;
CREATE POLICY "Anyone can send enquiry"
  ON public.enquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (is_read = false);

-- User roles: explicit admin-only write policies (defense in depth)
CREATE POLICY "Admins insert roles"
  ON public.user_roles FOR INSERT
  TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins update roles"
  ON public.user_roles FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins delete roles"
  ON public.user_roles FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));
