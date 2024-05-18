import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TopPageModule } from "src/top-page/top-page.module";
import { TopPageService } from "src/top-page/top-page.service";
import { SitemapController } from "./sitemap.controller";

@Module({
  controllers: [SitemapController],
  imports: [TopPageModule, ConfigModule],
})
export class SitemapModule {}
