import { Module } from '@nestjs/common';

import { IddaVisitVerificationModule } from 'src/modules/idda-visit-verification/idda-visit-verification.module';

// Aggregates all IDDA-specific modules that remain in Twenty (i.e. those that
// need direct access to workspace-scoped data via GlobalWorkspaceDataSourceModule).
// Standalone IDDA services (decision-register, business-calendar, mobile-device,
// push-subscription, workspace-join-request) live in idda-services behind Nginx.
@Module({
  imports: [IddaVisitVerificationModule],
})
export class IddaModule {}
