import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Any: any
  Int64: any
  Map: any
  Time: any
  Timestamp: any
  Upload: any
}

export interface AddTempDlnaipInput {
  address: Scalars['String']
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']>
}

export interface AssignSceneFileInput {
  file_id: Scalars['ID']
  scene_id: Scalars['ID']
}

export interface AutoTagMetadataInput {
  /** Paths to tag, null for all files */
  paths?: InputMaybe<Array<Scalars['String']>>
  /** IDs of performers to tag files with, or "*" for all */
  performers?: InputMaybe<Array<Scalars['String']>>
  /** IDs of studios to tag files with, or "*" for all */
  studios?: InputMaybe<Array<Scalars['String']>>
  /** IDs of tags to tag files with, or "*" for all */
  tags?: InputMaybe<Array<Scalars['String']>>
}

export interface AutoTagMetadataOptions {
  __typename?: 'AutoTagMetadataOptions'
  /** IDs of performers to tag files with, or "*" for all */
  performers?: Maybe<Array<Scalars['String']>>
  /** IDs of studios to tag files with, or "*" for all */
  studios?: Maybe<Array<Scalars['String']>>
  /** IDs of tags to tag files with, or "*" for all */
  tags?: Maybe<Array<Scalars['String']>>
}

export interface BackupDatabaseInput {
  download?: InputMaybe<Scalars['Boolean']>
}

export interface BaseFile {
  basename: Scalars['String']
  created_at: Scalars['Time']
  fingerprints: Fingerprint[]
  id: Scalars['ID']
  mod_time: Scalars['Time']
  parent_folder_id: Scalars['ID']
  path: Scalars['String']
  size: Scalars['Int64']
  updated_at: Scalars['Time']
  zip_file_id?: Maybe<Scalars['ID']>
}

export interface BulkGalleryUpdateInput {
  clientMutationId?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  ids?: InputMaybe<Array<Scalars['ID']>>
  organized?: InputMaybe<Scalars['Boolean']>
  performer_ids?: InputMaybe<BulkUpdateIds>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  scene_ids?: InputMaybe<BulkUpdateIds>
  studio_id?: InputMaybe<Scalars['ID']>
  tag_ids?: InputMaybe<BulkUpdateIds>
  url?: InputMaybe<Scalars['String']>
}

export interface BulkImageUpdateInput {
  clientMutationId?: InputMaybe<Scalars['String']>
  gallery_ids?: InputMaybe<BulkUpdateIds>
  ids?: InputMaybe<Array<Scalars['ID']>>
  organized?: InputMaybe<Scalars['Boolean']>
  performer_ids?: InputMaybe<BulkUpdateIds>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  studio_id?: InputMaybe<Scalars['ID']>
  tag_ids?: InputMaybe<BulkUpdateIds>
  title?: InputMaybe<Scalars['String']>
}

export interface BulkMovieUpdateInput {
  clientMutationId?: InputMaybe<Scalars['String']>
  director?: InputMaybe<Scalars['String']>
  ids?: InputMaybe<Array<Scalars['ID']>>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  studio_id?: InputMaybe<Scalars['ID']>
}

export interface BulkPerformerUpdateInput {
  aliases?: InputMaybe<Scalars['String']>
  birthdate?: InputMaybe<Scalars['String']>
  career_length?: InputMaybe<Scalars['String']>
  clientMutationId?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  death_date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  ethnicity?: InputMaybe<Scalars['String']>
  eye_color?: InputMaybe<Scalars['String']>
  fake_tits?: InputMaybe<Scalars['String']>
  favorite?: InputMaybe<Scalars['Boolean']>
  gender?: InputMaybe<GenderEnum>
  hair_color?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['String']>
  height_cm?: InputMaybe<Scalars['Int']>
  ids?: InputMaybe<Array<Scalars['ID']>>
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  instagram?: InputMaybe<Scalars['String']>
  measurements?: InputMaybe<Scalars['String']>
  piercings?: InputMaybe<Scalars['String']>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  tag_ids?: InputMaybe<BulkUpdateIds>
  tattoos?: InputMaybe<Scalars['String']>
  twitter?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  weight?: InputMaybe<Scalars['Int']>
}

export interface BulkSceneUpdateInput {
  clientMutationId?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  director?: InputMaybe<Scalars['String']>
  gallery_ids?: InputMaybe<BulkUpdateIds>
  ids?: InputMaybe<Array<Scalars['ID']>>
  movie_ids?: InputMaybe<BulkUpdateIds>
  organized?: InputMaybe<Scalars['Boolean']>
  performer_ids?: InputMaybe<BulkUpdateIds>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  studio_id?: InputMaybe<Scalars['ID']>
  tag_ids?: InputMaybe<BulkUpdateIds>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export enum BulkUpdateIdMode {
  Add = 'ADD',
  Remove = 'REMOVE',
  Set = 'SET'
}

export interface BulkUpdateIds {
  ids?: InputMaybe<Array<Scalars['ID']>>
  mode: BulkUpdateIdMode
}

export interface CleanMetadataInput {
  /** Do a dry run. Don't delete any files */
  dryRun: Scalars['Boolean']
  paths?: InputMaybe<Array<Scalars['String']>>
}

export interface ConfigDlnaInput {
  /** True if DLNA service should be enabled by default */
  enabled?: InputMaybe<Scalars['Boolean']>
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces?: InputMaybe<Array<Scalars['String']>>
  serverName?: InputMaybe<Scalars['String']>
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs?: InputMaybe<Array<Scalars['String']>>
}

export interface ConfigDlnaResult {
  __typename?: 'ConfigDLNAResult'
  /** True if DLNA service should be enabled by default */
  enabled: Scalars['Boolean']
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces: Array<Scalars['String']>
  serverName: Scalars['String']
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs: Array<Scalars['String']>
}

export interface ConfigDefaultSettingsInput {
  autoTag?: InputMaybe<AutoTagMetadataInput>
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: InputMaybe<Scalars['Boolean']>
  /** If true, delete generated files checkbox will be checked by default */
  deleteGenerated?: InputMaybe<Scalars['Boolean']>
  generate?: InputMaybe<GenerateMetadataInput>
  identify?: InputMaybe<IdentifyMetadataInput>
  scan?: InputMaybe<ScanMetadataInput>
}

export interface ConfigDefaultSettingsResult {
  __typename?: 'ConfigDefaultSettingsResult'
  autoTag?: Maybe<AutoTagMetadataOptions>
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: Maybe<Scalars['Boolean']>
  /** If true, delete generated supporting files checkbox will be checked by default */
  deleteGenerated?: Maybe<Scalars['Boolean']>
  generate?: Maybe<GenerateMetadataOptions>
  identify?: Maybe<IdentifyMetadataTaskOptions>
  scan?: Maybe<ScanMetadataOptions>
}

export interface ConfigDisableDropdownCreate {
  __typename?: 'ConfigDisableDropdownCreate'
  performer: Scalars['Boolean']
  studio: Scalars['Boolean']
  tag: Scalars['Boolean']
}

export interface ConfigDisableDropdownCreateInput {
  performer?: InputMaybe<Scalars['Boolean']>
  studio?: InputMaybe<Scalars['Boolean']>
  tag?: InputMaybe<Scalars['Boolean']>
}

export interface ConfigGeneralInput {
  /** Path to backup directory */
  backupDirectoryPath?: InputMaybe<Scalars['String']>
  /** Path to cache */
  cachePath?: InputMaybe<Scalars['String']>
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5?: InputMaybe<Scalars['Boolean']>
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders?: InputMaybe<Scalars['Boolean']>
  /** Custom Performer Image Location */
  customPerformerImageLocation?: InputMaybe<Scalars['String']>
  /** Path to the SQLite database */
  databasePath?: InputMaybe<Scalars['String']>
  /** Array of file regexp to exclude from Video Scans */
  excludes?: InputMaybe<Array<Scalars['String']>>
  /** Array of gallery zip file extensions */
  galleryExtensions?: InputMaybe<Array<Scalars['String']>>
  /** Path to generated files */
  generatedPath?: InputMaybe<Scalars['String']>
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes?: InputMaybe<Array<Scalars['String']>>
  /** Array of image file extensions */
  imageExtensions?: InputMaybe<Array<Scalars['String']>>
  /** Whether to log http access */
  logAccess?: InputMaybe<Scalars['Boolean']>
  /** Name of the log file */
  logFile?: InputMaybe<Scalars['String']>
  /** Minimum log level */
  logLevel?: InputMaybe<Scalars['String']>
  /** Whether to also output to stderr */
  logOut?: InputMaybe<Scalars['Boolean']>
  /** Maximum session cookie age */
  maxSessionAge?: InputMaybe<Scalars['Int']>
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: InputMaybe<StreamingResolutionEnum>
  /** Max generated transcode size */
  maxTranscodeSize?: InputMaybe<StreamingResolutionEnum>
  /** Path to import/export files */
  metadataPath?: InputMaybe<Scalars['String']>
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks?: InputMaybe<Scalars['Int']>
  /** Password */
  password?: InputMaybe<Scalars['String']>
  /** Include audio stream in previews */
  previewAudio?: InputMaybe<Scalars['Boolean']>
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars['String']>
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars['String']>
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars['Float']>
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars['Int']>
  /** Python path - resolved using path if unset */
  pythonPath?: InputMaybe<Scalars['String']>
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: InputMaybe<Scalars['String']>
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck?: InputMaybe<Scalars['Boolean']>
  /** Scraper user agent string */
  scraperUserAgent?: InputMaybe<Scalars['String']>
  /** Path to scrapers */
  scrapersPath?: InputMaybe<Scalars['String']>
  /** Stash-box instances used for tagging */
  stashBoxes?: InputMaybe<StashBoxInput[]>
  /** Array of file paths to content */
  stashes?: InputMaybe<StashConfigInput[]>
  /** Comma separated list of proxies to allow traffic from */
  trustedProxies?: InputMaybe<Array<Scalars['String']>>
  /** Username */
  username?: InputMaybe<Scalars['String']>
  /** Array of video file extensions */
  videoExtensions?: InputMaybe<Array<Scalars['String']>>
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm?: InputMaybe<HashAlgorithm>
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails?: InputMaybe<Scalars['Boolean']>
}

export interface ConfigGeneralResult {
  __typename?: 'ConfigGeneralResult'
  /** API Key */
  apiKey: Scalars['String']
  /** Path to backup directory */
  backupDirectoryPath: Scalars['String']
  /** Path to cache */
  cachePath: Scalars['String']
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5: Scalars['Boolean']
  /** Path to the config file used */
  configFilePath: Scalars['String']
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders: Scalars['Boolean']
  /** Custom Performer Image Location */
  customPerformerImageLocation?: Maybe<Scalars['String']>
  /** Path to the SQLite database */
  databasePath: Scalars['String']
  /** Array of file regexp to exclude from Video Scans */
  excludes: Array<Scalars['String']>
  /** Array of gallery zip file extensions */
  galleryExtensions: Array<Scalars['String']>
  /** Path to generated files */
  generatedPath: Scalars['String']
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes: Array<Scalars['String']>
  /** Array of image file extensions */
  imageExtensions: Array<Scalars['String']>
  /** Whether to log http access */
  logAccess: Scalars['Boolean']
  /** Name of the log file */
  logFile?: Maybe<Scalars['String']>
  /** Minimum log level */
  logLevel: Scalars['String']
  /** Whether to also output to stderr */
  logOut: Scalars['Boolean']
  /** Maximum session cookie age */
  maxSessionAge: Scalars['Int']
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: Maybe<StreamingResolutionEnum>
  /** Max generated transcode size */
  maxTranscodeSize?: Maybe<StreamingResolutionEnum>
  /** Path to import/export files */
  metadataPath: Scalars['String']
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks: Scalars['Int']
  /** Password */
  password: Scalars['String']
  /** Include audio stream in previews */
  previewAudio: Scalars['Boolean']
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd: Scalars['String']
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart: Scalars['String']
  /** Preset when generating preview */
  previewPreset: PreviewPreset
  /** Preview segment duration, in seconds */
  previewSegmentDuration: Scalars['Float']
  /** Number of segments in a preview file */
  previewSegments: Scalars['Int']
  /** Python path - resolved using path if unset */
  pythonPath: Scalars['String']
  /**
   * Scraper CDP path. Path to chrome executable or remote address
   * @deprecated use ConfigResult.scraping instead
   */
  scraperCDPPath?: Maybe<Scalars['String']>
  /**
   * Whether the scraper should check for invalid certificates
   * @deprecated use ConfigResult.scraping instead
   */
  scraperCertCheck: Scalars['Boolean']
  /**
   * Scraper user agent string
   * @deprecated use ConfigResult.scraping instead
   */
  scraperUserAgent?: Maybe<Scalars['String']>
  /** Path to scrapers */
  scrapersPath: Scalars['String']
  /** Stash-box instances used for tagging */
  stashBoxes: StashBox[]
  /** Array of file paths to content */
  stashes: StashConfig[]
  /**
   * Comma separated list of proxies to allow traffic from
   * @deprecated no longer supported
   */
  trustedProxies?: Maybe<Array<Scalars['String']>>
  /** Username */
  username: Scalars['String']
  /** Array of video file extensions */
  videoExtensions: Array<Scalars['String']>
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm: HashAlgorithm
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails: Scalars['Boolean']
}

export interface ConfigImageLightboxInput {
  displayMode?: InputMaybe<ImageLightboxDisplayMode>
  resetZoomOnNav?: InputMaybe<Scalars['Boolean']>
  scaleUp?: InputMaybe<Scalars['Boolean']>
  scrollAttemptsBeforeChange?: InputMaybe<Scalars['Int']>
  scrollMode?: InputMaybe<ImageLightboxScrollMode>
  slideshowDelay?: InputMaybe<Scalars['Int']>
}

export interface ConfigImageLightboxResult {
  __typename?: 'ConfigImageLightboxResult'
  displayMode?: Maybe<ImageLightboxDisplayMode>
  resetZoomOnNav?: Maybe<Scalars['Boolean']>
  scaleUp?: Maybe<Scalars['Boolean']>
  scrollAttemptsBeforeChange: Scalars['Int']
  scrollMode?: Maybe<ImageLightboxScrollMode>
  slideshowDelay?: Maybe<Scalars['Int']>
}

export interface ConfigInterfaceInput {
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: InputMaybe<Scalars['Boolean']>
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: InputMaybe<Scalars['Boolean']>
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: InputMaybe<Scalars['Boolean']>
  /** Custom CSS */
  css?: InputMaybe<Scalars['String']>
  cssEnabled?: InputMaybe<Scalars['Boolean']>
  /** Custom Locales */
  customLocales?: InputMaybe<Scalars['String']>
  customLocalesEnabled?: InputMaybe<Scalars['Boolean']>
  /** Set to true to disable creating new objects via the dropdown menus */
  disableDropdownCreate?: InputMaybe<ConfigDisableDropdownCreateInput>
  /** Funscript Time Offset */
  funscriptOffset?: InputMaybe<Scalars['Int']>
  /** Handy Connection Key */
  handyKey?: InputMaybe<Scalars['String']>
  imageLightbox?: InputMaybe<ConfigImageLightboxInput>
  /** Custom Javascript */
  javascript?: InputMaybe<Scalars['String']>
  javascriptEnabled?: InputMaybe<Scalars['Boolean']>
  /** Interface language */
  language?: InputMaybe<Scalars['String']>
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: InputMaybe<Scalars['Int']>
  /** Ordered list of items that should be shown in the menu */
  menuItems?: InputMaybe<Array<Scalars['String']>>
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: InputMaybe<Scalars['Boolean']>
  /** True if we should send notifications to the desktop */
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>
  /** Show scene scrubber by default */
  showScrubber?: InputMaybe<Scalars['Boolean']>
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: InputMaybe<Scalars['Boolean']>
  /** Slideshow Delay */
  slideshowDelay?: InputMaybe<Scalars['Int']>
  /** Enable sound on mouseover previews */
  soundOnPreview?: InputMaybe<Scalars['Boolean']>
  /** Wall playback type */
  wallPlayback?: InputMaybe<Scalars['String']>
  /** Show title and tags in wall view */
  wallShowTitle?: InputMaybe<Scalars['Boolean']>
}

export interface ConfigInterfaceResult {
  __typename?: 'ConfigInterfaceResult'
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: Maybe<Scalars['Boolean']>
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: Maybe<Scalars['Boolean']>
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: Maybe<Scalars['Boolean']>
  /** Custom CSS */
  css?: Maybe<Scalars['String']>
  cssEnabled?: Maybe<Scalars['Boolean']>
  /** Custom Locales */
  customLocales?: Maybe<Scalars['String']>
  customLocalesEnabled?: Maybe<Scalars['Boolean']>
  /** Fields are true if creating via dropdown menus are disabled */
  disableDropdownCreate: ConfigDisableDropdownCreate
  /** @deprecated Use disableDropdownCreate */
  disabledDropdownCreate: ConfigDisableDropdownCreate
  /** Funscript Time Offset */
  funscriptOffset?: Maybe<Scalars['Int']>
  /** Handy Connection Key */
  handyKey?: Maybe<Scalars['String']>
  imageLightbox: ConfigImageLightboxResult
  /** Custom Javascript */
  javascript?: Maybe<Scalars['String']>
  javascriptEnabled?: Maybe<Scalars['Boolean']>
  /** Interface language */
  language?: Maybe<Scalars['String']>
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: Maybe<Scalars['Int']>
  /** Ordered list of items that should be shown in the menu */
  menuItems?: Maybe<Array<Scalars['String']>>
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: Maybe<Scalars['Boolean']>
  /** True if we should send desktop notifications */
  notificationsEnabled?: Maybe<Scalars['Boolean']>
  /** Show scene scrubber by default */
  showScrubber?: Maybe<Scalars['Boolean']>
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: Maybe<Scalars['Boolean']>
  /**
   * Slideshow Delay
   * @deprecated Use imageLightbox.slideshowDelay
   */
  slideshowDelay?: Maybe<Scalars['Int']>
  /** Enable sound on mouseover previews */
  soundOnPreview?: Maybe<Scalars['Boolean']>
  /** Wall playback type */
  wallPlayback?: Maybe<Scalars['String']>
  /** Show title and tags in wall view */
  wallShowTitle?: Maybe<Scalars['Boolean']>
}

/** All configuration settings */
export interface ConfigResult {
  __typename?: 'ConfigResult'
  defaults: ConfigDefaultSettingsResult
  dlna: ConfigDlnaResult
  general: ConfigGeneralResult
  interface: ConfigInterfaceResult
  scraping: ConfigScrapingResult
  ui: Scalars['Map']
}

export interface ConfigScrapingInput {
  /** Tags blacklist during scraping */
  excludeTagPatterns?: InputMaybe<Array<Scalars['String']>>
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: InputMaybe<Scalars['String']>
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck?: InputMaybe<Scalars['Boolean']>
  /** Scraper user agent string */
  scraperUserAgent?: InputMaybe<Scalars['String']>
}

export interface ConfigScrapingResult {
  __typename?: 'ConfigScrapingResult'
  /** Tags blacklist during scraping */
  excludeTagPatterns: Array<Scalars['String']>
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: Maybe<Scalars['String']>
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck: Scalars['Boolean']
  /** Scraper user agent string */
  scraperUserAgent?: Maybe<Scalars['String']>
}

export enum CriterionModifier {
  /** >= AND <= */
  Between = 'BETWEEN',
  /** = */
  Equals = 'EQUALS',
  Excludes = 'EXCLUDES',
  /** > */
  GreaterThan = 'GREATER_THAN',
  Includes = 'INCLUDES',
  /** INCLUDES ALL */
  IncludesAll = 'INCLUDES_ALL',
  /** IS NULL */
  IsNull = 'IS_NULL',
  /** < */
  LessThan = 'LESS_THAN',
  /** MATCHES REGEX */
  MatchesRegex = 'MATCHES_REGEX',
  /** < OR > */
  NotBetween = 'NOT_BETWEEN',
  /** != */
  NotEquals = 'NOT_EQUALS',
  /** NOT MATCHES REGEX */
  NotMatchesRegex = 'NOT_MATCHES_REGEX',
  /** IS NOT NULL */
  NotNull = 'NOT_NULL'
}

export interface Dlnaip {
  __typename?: 'DLNAIP'
  ipAddress: Scalars['String']
  /** Time until IP will be no longer allowed/disallowed */
  until?: Maybe<Scalars['Time']>
}

export interface DlnaStatus {
  __typename?: 'DLNAStatus'
  allowedIPAddresses: Dlnaip[]
  recentIPAddresses: Array<Scalars['String']>
  running: Scalars['Boolean']
  /** If not currently running, time until it will be started. If running, time until it will be stopped */
  until?: Maybe<Scalars['Time']>
}

export interface DateCriterionInput {
  modifier: CriterionModifier
  value: Scalars['String']
  value2?: InputMaybe<Scalars['String']>
}

export interface DestroyFilterInput {
  id: Scalars['ID']
}

/** Directory structure of a path */
export interface Directory {
  __typename?: 'Directory'
  directories: Array<Scalars['String']>
  parent?: Maybe<Scalars['String']>
  path: Scalars['String']
}

export interface DisableDlnaInput {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']>
}

export interface EnableDlnaInput {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']>
}

export interface ExportObjectTypeInput {
  all?: InputMaybe<Scalars['Boolean']>
  ids?: InputMaybe<Array<Scalars['String']>>
}

export interface ExportObjectsInput {
  galleries?: InputMaybe<ExportObjectTypeInput>
  images?: InputMaybe<ExportObjectTypeInput>
  includeDependencies?: InputMaybe<Scalars['Boolean']>
  movies?: InputMaybe<ExportObjectTypeInput>
  performers?: InputMaybe<ExportObjectTypeInput>
  scenes?: InputMaybe<ExportObjectTypeInput>
  studios?: InputMaybe<ExportObjectTypeInput>
  tags?: InputMaybe<ExportObjectTypeInput>
}

export enum FilterMode {
  Galleries = 'GALLERIES',
  Images = 'IMAGES',
  Movies = 'MOVIES',
  Performers = 'PERFORMERS',
  Scenes = 'SCENES',
  SceneMarkers = 'SCENE_MARKERS',
  Studios = 'STUDIOS',
  Tags = 'TAGS'
}

export interface FindFilterType {
  direction?: InputMaybe<SortDirectionEnum>
  page?: InputMaybe<Scalars['Int']>
  /** use per_page = -1 to indicate all results. Defaults to 25. */
  per_page?: InputMaybe<Scalars['Int']>
  q?: InputMaybe<Scalars['String']>
  sort?: InputMaybe<Scalars['String']>
}

export interface FindGalleriesResultType {
  __typename?: 'FindGalleriesResultType'
  count: Scalars['Int']
  galleries: Gallery[]
}

export interface FindImagesResultType {
  __typename?: 'FindImagesResultType'
  count: Scalars['Int']
  /** Total file size in bytes */
  filesize: Scalars['Float']
  images: Image[]
  /** Total megapixels of the images */
  megapixels: Scalars['Float']
}

export interface FindJobInput {
  id: Scalars['ID']
}

export interface FindMoviesResultType {
  __typename?: 'FindMoviesResultType'
  count: Scalars['Int']
  movies: Movie[]
}

export interface FindPerformersResultType {
  __typename?: 'FindPerformersResultType'
  count: Scalars['Int']
  performers: Performer[]
}

export interface FindSceneMarkersResultType {
  __typename?: 'FindSceneMarkersResultType'
  count: Scalars['Int']
  scene_markers: SceneMarker[]
}

export interface FindScenesResultType {
  __typename?: 'FindScenesResultType'
  count: Scalars['Int']
  /** Total duration in seconds */
  duration: Scalars['Float']
  /** Total file size in bytes */
  filesize: Scalars['Float']
  scenes: Scene[]
}

export interface FindStudiosResultType {
  __typename?: 'FindStudiosResultType'
  count: Scalars['Int']
  studios: Studio[]
}

export interface FindTagsResultType {
  __typename?: 'FindTagsResultType'
  count: Scalars['Int']
  tags: Tag[]
}

export interface Fingerprint {
  __typename?: 'Fingerprint'
  type: Scalars['String']
  value: Scalars['String']
}

export interface Folder {
  __typename?: 'Folder'
  created_at: Scalars['Time']
  id: Scalars['ID']
  mod_time: Scalars['Time']
  parent_folder_id?: Maybe<Scalars['ID']>
  path: Scalars['String']
  updated_at: Scalars['Time']
  zip_file_id?: Maybe<Scalars['ID']>
}

/** Gallery type */
export interface Gallery {
  __typename?: 'Gallery'
  /** @deprecated Use files.fingerprints */
  checksum: Scalars['String']
  cover?: Maybe<Image>
  created_at: Scalars['Time']
  date?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  /** @deprecated Use files.mod_time */
  file_mod_time?: Maybe<Scalars['Time']>
  files: GalleryFile[]
  folder?: Maybe<Folder>
  id: Scalars['ID']
  image_count: Scalars['Int']
  /**
   * The images in the gallery
   * @deprecated Use findImages
   */
  images: Image[]
  organized: Scalars['Boolean']
  /** @deprecated Use files.path */
  path?: Maybe<Scalars['String']>
  performers: Performer[]
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars['Int']>
  rating100?: Maybe<Scalars['Int']>
  scenes: Scene[]
  studio?: Maybe<Studio>
  tags: Tag[]
  title?: Maybe<Scalars['String']>
  updated_at: Scalars['Time']
  url?: Maybe<Scalars['String']>
}

export interface GalleryAddInput {
  gallery_id: Scalars['ID']
  image_ids: Array<Scalars['ID']>
}

export interface GalleryCreateInput {
  date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  organized?: InputMaybe<Scalars['Boolean']>
  performer_ids?: InputMaybe<Array<Scalars['ID']>>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  scene_ids?: InputMaybe<Array<Scalars['ID']>>
  studio_id?: InputMaybe<Scalars['ID']>
  tag_ids?: InputMaybe<Array<Scalars['ID']>>
  title: Scalars['String']
  url?: InputMaybe<Scalars['String']>
}

export interface GalleryDestroyInput {
  /**
   * If true, then the zip file will be deleted if the gallery is zip-file-based.
   * If gallery is folder-based, then any files not associated with other
   * galleries will be deleted, along with the folder, if it is not empty.
   */
  delete_file?: InputMaybe<Scalars['Boolean']>
  delete_generated?: InputMaybe<Scalars['Boolean']>
  ids: Array<Scalars['ID']>
}

export type GalleryFile = BaseFile & {
  __typename?: 'GalleryFile'
  basename: Scalars['String']
  created_at: Scalars['Time']
  fingerprints: Fingerprint[]
  id: Scalars['ID']
  mod_time: Scalars['Time']
  parent_folder_id: Scalars['ID']
  path: Scalars['String']
  size: Scalars['Int64']
  updated_at: Scalars['Time']
  zip_file_id?: Maybe<Scalars['ID']>
}

export interface GalleryFilterType {
  AND?: InputMaybe<GalleryFilterType>
  NOT?: InputMaybe<GalleryFilterType>
  OR?: InputMaybe<GalleryFilterType>
  /** Filter by average image resolution */
  average_resolution?: InputMaybe<ResolutionCriterionInput>
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>
  details?: InputMaybe<StringCriterionInput>
  /** Filter by zip-file count */
  file_count?: InputMaybe<IntCriterionInput>
  id?: InputMaybe<IntCriterionInput>
  /** Filter by number of images in this gallery */
  image_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include galleries missing this property */
  is_missing?: InputMaybe<Scalars['String']>
  /** Filter to include/exclude galleries that were created from zip */
  is_zip?: InputMaybe<Scalars['Boolean']>
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']>
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>
  /** Filter galleries by performer age at time of gallery */
  performer_age?: InputMaybe<IntCriterionInput>
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>
  /** Filter galleries that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']>
  /** Filter to only include galleries with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter to only include galleries with these performers */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter to only include galleries with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include galleries with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  title?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
}

export interface GalleryRemoveInput {
  gallery_id: Scalars['ID']
  image_ids: Array<Scalars['ID']>
}

export interface GalleryUpdateInput {
  clientMutationId?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  organized?: InputMaybe<Scalars['Boolean']>
  performer_ids?: InputMaybe<Array<Scalars['ID']>>
  primary_file_id?: InputMaybe<Scalars['ID']>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  scene_ids?: InputMaybe<Array<Scalars['ID']>>
  studio_id?: InputMaybe<Scalars['ID']>
  tag_ids?: InputMaybe<Array<Scalars['ID']>>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export interface GenderCriterionInput {
  modifier: CriterionModifier
  value?: InputMaybe<GenderEnum>
}

export enum GenderEnum {
  Female = 'FEMALE',
  Intersex = 'INTERSEX',
  Male = 'MALE',
  NonBinary = 'NON_BINARY',
  TransgenderFemale = 'TRANSGENDER_FEMALE',
  TransgenderMale = 'TRANSGENDER_MALE'
}

export interface GenerateApiKeyInput {
  clear?: InputMaybe<Scalars['Boolean']>
}

export interface GenerateMetadataInput {
  /** Generate transcodes even if not required */
  forceTranscodes?: InputMaybe<Scalars['Boolean']>
  imagePreviews?: InputMaybe<Scalars['Boolean']>
  interactiveHeatmapsSpeeds?: InputMaybe<Scalars['Boolean']>
  /** marker ids to generate for */
  markerIDs?: InputMaybe<Array<Scalars['ID']>>
  markerImagePreviews?: InputMaybe<Scalars['Boolean']>
  markerScreenshots?: InputMaybe<Scalars['Boolean']>
  markers?: InputMaybe<Scalars['Boolean']>
  /** overwrite existing media */
  overwrite?: InputMaybe<Scalars['Boolean']>
  phashes?: InputMaybe<Scalars['Boolean']>
  previewOptions?: InputMaybe<GeneratePreviewOptionsInput>
  previews?: InputMaybe<Scalars['Boolean']>
  /** scene ids to generate for */
  sceneIDs?: InputMaybe<Array<Scalars['ID']>>
  sprites?: InputMaybe<Scalars['Boolean']>
  transcodes?: InputMaybe<Scalars['Boolean']>
}

export interface GenerateMetadataOptions {
  __typename?: 'GenerateMetadataOptions'
  imagePreviews?: Maybe<Scalars['Boolean']>
  interactiveHeatmapsSpeeds?: Maybe<Scalars['Boolean']>
  markerImagePreviews?: Maybe<Scalars['Boolean']>
  markerScreenshots?: Maybe<Scalars['Boolean']>
  markers?: Maybe<Scalars['Boolean']>
  phashes?: Maybe<Scalars['Boolean']>
  previewOptions?: Maybe<GeneratePreviewOptions>
  previews?: Maybe<Scalars['Boolean']>
  sprites?: Maybe<Scalars['Boolean']>
  transcodes?: Maybe<Scalars['Boolean']>
}

export interface GeneratePreviewOptions {
  __typename?: 'GeneratePreviewOptions'
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: Maybe<Scalars['String']>
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: Maybe<Scalars['String']>
  /** Preset when generating preview */
  previewPreset?: Maybe<PreviewPreset>
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: Maybe<Scalars['Float']>
  /** Number of segments in a preview file */
  previewSegments?: Maybe<Scalars['Int']>
}

export interface GeneratePreviewOptionsInput {
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars['String']>
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars['String']>
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars['Float']>
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars['Int']>
}

export enum HashAlgorithm {
  Md5 = 'MD5',
  /** oshash */
  Oshash = 'OSHASH'
}

export interface HierarchicalMultiCriterionInput {
  depth?: InputMaybe<Scalars['Int']>
  modifier: CriterionModifier
  value?: InputMaybe<Array<Scalars['ID']>>
}

export interface IdentifyFieldOptions {
  __typename?: 'IdentifyFieldOptions'
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: Maybe<Scalars['Boolean']>
  field: Scalars['String']
  strategy: IdentifyFieldStrategy
}

export interface IdentifyFieldOptionsInput {
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: InputMaybe<Scalars['Boolean']>
  field: Scalars['String']
  strategy: IdentifyFieldStrategy
}

export enum IdentifyFieldStrategy {
  /** Never sets the field value */
  Ignore = 'IGNORE',
  /**
   * For multi-value fields, merge with existing.
   * For single-value fields, ignore if already set
   */
  Merge = 'MERGE',
  /**
   * Always replaces the value if a value is found.
   *   For multi-value fields, any existing values are removed and replaced with the
   *   scraped values.
   */
  Overwrite = 'OVERWRITE'
}

export interface IdentifyMetadataInput {
  /** Options defined here override the configured defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>
  /** paths of scenes to identify - ignored if scene ids are set */
  paths?: InputMaybe<Array<Scalars['String']>>
  /** scene ids to identify */
  sceneIDs?: InputMaybe<Array<Scalars['ID']>>
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: IdentifySourceInput[]
}

export interface IdentifyMetadataOptions {
  __typename?: 'IdentifyMetadataOptions'
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: Maybe<IdentifyFieldOptions[]>
  /** defaults to true if not provided */
  includeMalePerformers?: Maybe<Scalars['Boolean']>
  /** defaults to true if not provided */
  setCoverImage?: Maybe<Scalars['Boolean']>
  setOrganized?: Maybe<Scalars['Boolean']>
}

export interface IdentifyMetadataOptionsInput {
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: InputMaybe<IdentifyFieldOptionsInput[]>
  /** defaults to true if not provided */
  includeMalePerformers?: InputMaybe<Scalars['Boolean']>
  /** defaults to true if not provided */
  setCoverImage?: InputMaybe<Scalars['Boolean']>
  setOrganized?: InputMaybe<Scalars['Boolean']>
}

export interface IdentifyMetadataTaskOptions {
  __typename?: 'IdentifyMetadataTaskOptions'
  /** Options defined here override the configured defaults */
  options?: Maybe<IdentifyMetadataOptions>
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: IdentifySource[]
}

export interface IdentifySource {
  __typename?: 'IdentifySource'
  /** Options defined for a source override the defaults */
  options?: Maybe<IdentifyMetadataOptions>
  source: ScraperSource
}

export interface IdentifySourceInput {
  /** Options defined for a source override the defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>
  source: ScraperSourceInput
}

export interface Image {
  __typename?: 'Image'
  /** @deprecated Use files.fingerprints */
  checksum?: Maybe<Scalars['String']>
  created_at: Scalars['Time']
  /** @deprecated Use files.mod_time */
  file: ImageFileType
  /** @deprecated Use files.mod_time */
  file_mod_time?: Maybe<Scalars['Time']>
  files: ImageFile[]
  galleries: Gallery[]
  id: Scalars['ID']
  o_counter?: Maybe<Scalars['Int']>
  organized: Scalars['Boolean']
  /** @deprecated Use files.path */
  path: Scalars['String']
  paths: ImagePathsType
  performers: Performer[]
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars['Int']>
  rating100?: Maybe<Scalars['Int']>
  studio?: Maybe<Studio>
  tags: Tag[]
  title?: Maybe<Scalars['String']>
  updated_at: Scalars['Time']
}

export interface ImageDestroyInput {
  delete_file?: InputMaybe<Scalars['Boolean']>
  delete_generated?: InputMaybe<Scalars['Boolean']>
  id: Scalars['ID']
}

export type ImageFile = BaseFile & {
  __typename?: 'ImageFile'
  basename: Scalars['String']
  created_at: Scalars['Time']
  fingerprints: Fingerprint[]
  height: Scalars['Int']
  id: Scalars['ID']
  mod_time: Scalars['Time']
  parent_folder_id: Scalars['ID']
  path: Scalars['String']
  size: Scalars['Int64']
  updated_at: Scalars['Time']
  width: Scalars['Int']
  zip_file_id?: Maybe<Scalars['ID']>
}

export interface ImageFileType {
  __typename?: 'ImageFileType'
  height: Scalars['Int']
  mod_time: Scalars['Time']
  size: Scalars['Int']
  width: Scalars['Int']
}

export interface ImageFilterType {
  AND?: InputMaybe<ImageFilterType>
  NOT?: InputMaybe<ImageFilterType>
  OR?: InputMaybe<ImageFilterType>
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by file count */
  file_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include images with these galleries */
  galleries?: InputMaybe<MultiCriterionInput>
  /**  Filter by image id */
  id?: InputMaybe<IntCriterionInput>
  /** Filter to only include images missing this property */
  is_missing?: InputMaybe<Scalars['String']>
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']>
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>
  /** Filter images that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']>
  /** Filter to only include images with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter to only include images with these performers */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>
  /** Filter to only include images with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include images with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  title?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
}

export enum ImageLightboxDisplayMode {
  FitX = 'FIT_X',
  FitXy = 'FIT_XY',
  Original = 'ORIGINAL'
}

export enum ImageLightboxScrollMode {
  PanY = 'PAN_Y',
  Zoom = 'ZOOM'
}

export interface ImagePathsType {
  __typename?: 'ImagePathsType'
  image?: Maybe<Scalars['String']>
  thumbnail?: Maybe<Scalars['String']>
}

export interface ImageUpdateInput {
  clientMutationId?: InputMaybe<Scalars['String']>
  gallery_ids?: InputMaybe<Array<Scalars['ID']>>
  id: Scalars['ID']
  organized?: InputMaybe<Scalars['Boolean']>
  performer_ids?: InputMaybe<Array<Scalars['ID']>>
  primary_file_id?: InputMaybe<Scalars['ID']>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  studio_id?: InputMaybe<Scalars['ID']>
  tag_ids?: InputMaybe<Array<Scalars['ID']>>
  title?: InputMaybe<Scalars['String']>
}

export interface ImagesDestroyInput {
  delete_file?: InputMaybe<Scalars['Boolean']>
  delete_generated?: InputMaybe<Scalars['Boolean']>
  ids: Array<Scalars['ID']>
}

export enum ImportDuplicateEnum {
  Fail = 'FAIL',
  Ignore = 'IGNORE',
  Overwrite = 'OVERWRITE'
}

export enum ImportMissingRefEnum {
  Create = 'CREATE',
  Fail = 'FAIL',
  Ignore = 'IGNORE'
}

export interface ImportObjectsInput {
  duplicateBehaviour: ImportDuplicateEnum
  file: Scalars['Upload']
  missingRefBehaviour: ImportMissingRefEnum
}

export interface IntCriterionInput {
  modifier: CriterionModifier
  value: Scalars['Int']
  value2?: InputMaybe<Scalars['Int']>
}

export interface Job {
  __typename?: 'Job'
  addTime: Scalars['Time']
  description: Scalars['String']
  endTime?: Maybe<Scalars['Time']>
  id: Scalars['ID']
  progress?: Maybe<Scalars['Float']>
  startTime?: Maybe<Scalars['Time']>
  status: JobStatus
  subTasks?: Maybe<Array<Scalars['String']>>
}

export enum JobStatus {
  Cancelled = 'CANCELLED',
  Finished = 'FINISHED',
  Ready = 'READY',
  Running = 'RUNNING',
  Stopping = 'STOPPING'
}

export interface JobStatusUpdate {
  __typename?: 'JobStatusUpdate'
  job: Job
  type: JobStatusUpdateType
}

export enum JobStatusUpdateType {
  Add = 'ADD',
  Remove = 'REMOVE',
  Update = 'UPDATE'
}

export interface LogEntry {
  __typename?: 'LogEntry'
  level: LogLevel
  message: Scalars['String']
  time: Scalars['Time']
}

export enum LogLevel {
  Debug = 'Debug',
  Error = 'Error',
  Info = 'Info',
  Progress = 'Progress',
  Trace = 'Trace',
  Warning = 'Warning'
}

export interface MarkerStringsResultType {
  __typename?: 'MarkerStringsResultType'
  count: Scalars['Int']
  id: Scalars['ID']
  title: Scalars['String']
}

export interface MigrateInput {
  backupPath: Scalars['String']
}

export interface Movie {
  __typename?: 'Movie'
  aliases?: Maybe<Scalars['String']>
  back_image_path?: Maybe<Scalars['String']>
  checksum: Scalars['String']
  created_at: Scalars['Time']
  date?: Maybe<Scalars['String']>
  director?: Maybe<Scalars['String']>
  /** Duration in seconds */
  duration?: Maybe<Scalars['Int']>
  front_image_path?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars['Int']>
  rating100?: Maybe<Scalars['Int']>
  scene_count?: Maybe<Scalars['Int']>
  scenes: Scene[]
  studio?: Maybe<Studio>
  synopsis?: Maybe<Scalars['String']>
  updated_at: Scalars['Time']
  url?: Maybe<Scalars['String']>
}

export interface MovieCreateInput {
  aliases?: InputMaybe<Scalars['String']>
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  director?: InputMaybe<Scalars['String']>
  /** Duration in seconds */
  duration?: InputMaybe<Scalars['Int']>
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  studio_id?: InputMaybe<Scalars['ID']>
  synopsis?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export interface MovieDestroyInput {
  id: Scalars['ID']
}

export interface MovieFilterType {
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>
  director?: InputMaybe<StringCriterionInput>
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>
  /** Filter to only include movies missing this property */
  is_missing?: InputMaybe<Scalars['String']>
  name?: InputMaybe<StringCriterionInput>
  /** Filter to only include movies where performer appears in a scene */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter to only include movies with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  synopsis?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
}

export interface MovieUpdateInput {
  aliases?: InputMaybe<Scalars['String']>
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  director?: InputMaybe<Scalars['String']>
  duration?: InputMaybe<Scalars['Int']>
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  name?: InputMaybe<Scalars['String']>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  studio_id?: InputMaybe<Scalars['ID']>
  synopsis?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export interface MultiCriterionInput {
  modifier: CriterionModifier
  value?: InputMaybe<Array<Scalars['ID']>>
}

export interface Mutation {
  __typename?: 'Mutation'
  addGalleryImages: Scalars['Boolean']
  /** Enables an IP address for DLNA for an optional duration */
  addTempDLNAIP: Scalars['Boolean']
  /** Backup the database. Optionally returns a link to download the database file */
  backupDatabase?: Maybe<Scalars['String']>
  bulkGalleryUpdate?: Maybe<Gallery[]>
  bulkImageUpdate?: Maybe<Image[]>
  bulkMovieUpdate?: Maybe<Movie[]>
  bulkPerformerUpdate?: Maybe<Performer[]>
  bulkSceneUpdate?: Maybe<Scene[]>
  configureDLNA: ConfigDlnaResult
  configureDefaults: ConfigDefaultSettingsResult
  /** Change general configuration options */
  configureGeneral: ConfigGeneralResult
  configureInterface: ConfigInterfaceResult
  configureScraping: ConfigScrapingResult
  configureUI: Scalars['Map']
  configureUISetting: Scalars['Map']
  deleteFiles: Scalars['Boolean']
  destroySavedFilter: Scalars['Boolean']
  /** Disables DLNA for an optional duration. Has no effect if DLNA is disabled by default */
  disableDLNA: Scalars['Boolean']
  /** Enables DLNA for an optional duration. Has no effect if DLNA is enabled by default */
  enableDLNA: Scalars['Boolean']
  /** Returns a link to download the result */
  exportObjects?: Maybe<Scalars['String']>
  galleriesUpdate?: Maybe<Array<Maybe<Gallery>>>
  galleryCreate?: Maybe<Gallery>
  galleryDestroy: Scalars['Boolean']
  galleryUpdate?: Maybe<Gallery>
  /** Generate and set (or clear) API key */
  generateAPIKey: Scalars['String']
  /** Decrements the o-counter for an image. Returns the new value */
  imageDecrementO: Scalars['Int']
  imageDestroy: Scalars['Boolean']
  /** Increments the o-counter for an image. Returns the new value */
  imageIncrementO: Scalars['Int']
  /** Resets the o-counter for a image to 0. Returns the new value */
  imageResetO: Scalars['Int']
  imageUpdate?: Maybe<Image>
  imagesDestroy: Scalars['Boolean']
  imagesUpdate?: Maybe<Array<Maybe<Image>>>
  /** Performs an incremental import. Returns the job ID */
  importObjects: Scalars['ID']
  /** Start auto-tagging. Returns the job ID */
  metadataAutoTag: Scalars['ID']
  /** Clean metadata. Returns the job ID */
  metadataClean: Scalars['ID']
  /** Start a full export. Outputs to the metadata directory. Returns the job ID */
  metadataExport: Scalars['ID']
  /** Start generating content. Returns the job ID */
  metadataGenerate: Scalars['ID']
  /** Identifies scenes using scrapers. Returns the job ID */
  metadataIdentify: Scalars['ID']
  /** Start an full import. Completely wipes the database and imports from the metadata directory. Returns the job ID */
  metadataImport: Scalars['ID']
  /** Start a scan. Returns the job ID */
  metadataScan: Scalars['ID']
  migrate: Scalars['Boolean']
  /** Migrate generated files for the current hash naming */
  migrateHashNaming: Scalars['ID']
  movieCreate?: Maybe<Movie>
  movieDestroy: Scalars['Boolean']
  movieUpdate?: Maybe<Movie>
  moviesDestroy: Scalars['Boolean']
  performerCreate?: Maybe<Performer>
  performerDestroy: Scalars['Boolean']
  performerUpdate?: Maybe<Performer>
  performersDestroy: Scalars['Boolean']
  reloadPlugins: Scalars['Boolean']
  /** Reload scrapers */
  reloadScrapers: Scalars['Boolean']
  removeGalleryImages: Scalars['Boolean']
  /** Removes an IP address from the temporary DLNA whitelist */
  removeTempDLNAIP: Scalars['Boolean']
  /** Run plugin task. Returns the job ID */
  runPluginTask: Scalars['ID']
  saveFilter: SavedFilter
  sceneAssignFile: Scalars['Boolean']
  sceneCreate?: Maybe<Scene>
  /** Decrements the o-counter for a scene. Returns the new value */
  sceneDecrementO: Scalars['Int']
  sceneDestroy: Scalars['Boolean']
  /** Generates screenshot at specified time in seconds. Leave empty to generate default screenshot */
  sceneGenerateScreenshot: Scalars['String']
  /** Increments the o-counter for a scene. Returns the new value */
  sceneIncrementO: Scalars['Int']
  /** Increments the play count for the scene. Returns the new play count value. */
  sceneIncrementPlayCount: Scalars['Int']
  sceneMarkerCreate?: Maybe<SceneMarker>
  sceneMarkerDestroy: Scalars['Boolean']
  sceneMarkerUpdate?: Maybe<SceneMarker>
  sceneMerge?: Maybe<Scene>
  /** Resets the o-counter for a scene to 0. Returns the new value */
  sceneResetO: Scalars['Int']
  /** Sets the resume time point (if provided) and adds the provided duration to the scene's play duration */
  sceneSaveActivity: Scalars['Boolean']
  sceneUpdate?: Maybe<Scene>
  scenesDestroy: Scalars['Boolean']
  scenesUpdate?: Maybe<Array<Maybe<Scene>>>
  setDefaultFilter: Scalars['Boolean']
  setup: Scalars['Boolean']
  /** Run batch performer tag task. Returns the job ID. */
  stashBoxBatchPerformerTag: Scalars['String']
  stopAllJobs: Scalars['Boolean']
  stopJob: Scalars['Boolean']
  studioCreate?: Maybe<Studio>
  studioDestroy: Scalars['Boolean']
  studioUpdate?: Maybe<Studio>
  studiosDestroy: Scalars['Boolean']
  /** Submit fingerprints to stash-box instance */
  submitStashBoxFingerprints: Scalars['Boolean']
  /** Submit performer as draft to stash-box instance */
  submitStashBoxPerformerDraft?: Maybe<Scalars['ID']>
  /** Submit scene as draft to stash-box instance */
  submitStashBoxSceneDraft?: Maybe<Scalars['ID']>
  tagCreate?: Maybe<Tag>
  tagDestroy: Scalars['Boolean']
  tagUpdate?: Maybe<Tag>
  tagsDestroy: Scalars['Boolean']
  tagsMerge?: Maybe<Tag>
}

export interface MutationAddGalleryImagesArgs {
  input: GalleryAddInput
}

export interface MutationAddTempDlnaipArgs {
  input: AddTempDlnaipInput
}

export interface MutationBackupDatabaseArgs {
  input: BackupDatabaseInput
}

export interface MutationBulkGalleryUpdateArgs {
  input: BulkGalleryUpdateInput
}

export interface MutationBulkImageUpdateArgs {
  input: BulkImageUpdateInput
}

export interface MutationBulkMovieUpdateArgs {
  input: BulkMovieUpdateInput
}

export interface MutationBulkPerformerUpdateArgs {
  input: BulkPerformerUpdateInput
}

export interface MutationBulkSceneUpdateArgs {
  input: BulkSceneUpdateInput
}

export interface MutationConfigureDlnaArgs {
  input: ConfigDlnaInput
}

export interface MutationConfigureDefaultsArgs {
  input: ConfigDefaultSettingsInput
}

export interface MutationConfigureGeneralArgs {
  input: ConfigGeneralInput
}

export interface MutationConfigureInterfaceArgs {
  input: ConfigInterfaceInput
}

export interface MutationConfigureScrapingArgs {
  input: ConfigScrapingInput
}

export interface MutationConfigureUiArgs {
  input: Scalars['Map']
}

export interface MutationConfigureUiSettingArgs {
  key: Scalars['String']
  value?: InputMaybe<Scalars['Any']>
}

export interface MutationDeleteFilesArgs {
  ids: Array<Scalars['ID']>
}

export interface MutationDestroySavedFilterArgs {
  input: DestroyFilterInput
}

export interface MutationDisableDlnaArgs {
  input: DisableDlnaInput
}

export interface MutationEnableDlnaArgs {
  input: EnableDlnaInput
}

export interface MutationExportObjectsArgs {
  input: ExportObjectsInput
}

export interface MutationGalleriesUpdateArgs {
  input: GalleryUpdateInput[]
}

export interface MutationGalleryCreateArgs {
  input: GalleryCreateInput
}

export interface MutationGalleryDestroyArgs {
  input: GalleryDestroyInput
}

export interface MutationGalleryUpdateArgs {
  input: GalleryUpdateInput
}

export interface MutationGenerateApiKeyArgs {
  input: GenerateApiKeyInput
}

export interface MutationImageDecrementOArgs {
  id: Scalars['ID']
}

export interface MutationImageDestroyArgs {
  input: ImageDestroyInput
}

export interface MutationImageIncrementOArgs {
  id: Scalars['ID']
}

export interface MutationImageResetOArgs {
  id: Scalars['ID']
}

export interface MutationImageUpdateArgs {
  input: ImageUpdateInput
}

export interface MutationImagesDestroyArgs {
  input: ImagesDestroyInput
}

export interface MutationImagesUpdateArgs {
  input: ImageUpdateInput[]
}

export interface MutationImportObjectsArgs {
  input: ImportObjectsInput
}

export interface MutationMetadataAutoTagArgs {
  input: AutoTagMetadataInput
}

export interface MutationMetadataCleanArgs {
  input: CleanMetadataInput
}

export interface MutationMetadataGenerateArgs {
  input: GenerateMetadataInput
}

export interface MutationMetadataIdentifyArgs {
  input: IdentifyMetadataInput
}

export interface MutationMetadataScanArgs {
  input: ScanMetadataInput
}

export interface MutationMigrateArgs {
  input: MigrateInput
}

export interface MutationMovieCreateArgs {
  input: MovieCreateInput
}

export interface MutationMovieDestroyArgs {
  input: MovieDestroyInput
}

export interface MutationMovieUpdateArgs {
  input: MovieUpdateInput
}

export interface MutationMoviesDestroyArgs {
  ids: Array<Scalars['ID']>
}

export interface MutationPerformerCreateArgs {
  input: PerformerCreateInput
}

export interface MutationPerformerDestroyArgs {
  input: PerformerDestroyInput
}

export interface MutationPerformerUpdateArgs {
  input: PerformerUpdateInput
}

export interface MutationPerformersDestroyArgs {
  ids: Array<Scalars['ID']>
}

export interface MutationRemoveGalleryImagesArgs {
  input: GalleryRemoveInput
}

export interface MutationRemoveTempDlnaipArgs {
  input: RemoveTempDlnaipInput
}

export interface MutationRunPluginTaskArgs {
  args?: InputMaybe<PluginArgInput[]>
  plugin_id: Scalars['ID']
  task_name: Scalars['String']
}

export interface MutationSaveFilterArgs {
  input: SaveFilterInput
}

export interface MutationSceneAssignFileArgs {
  input: AssignSceneFileInput
}

export interface MutationSceneCreateArgs {
  input: SceneCreateInput
}

export interface MutationSceneDecrementOArgs {
  id: Scalars['ID']
}

export interface MutationSceneDestroyArgs {
  input: SceneDestroyInput
}

export interface MutationSceneGenerateScreenshotArgs {
  at?: InputMaybe<Scalars['Float']>
  id: Scalars['ID']
}

export interface MutationSceneIncrementOArgs {
  id: Scalars['ID']
}

export interface MutationSceneIncrementPlayCountArgs {
  id: Scalars['ID']
}

export interface MutationSceneMarkerCreateArgs {
  input: SceneMarkerCreateInput
}

export interface MutationSceneMarkerDestroyArgs {
  id: Scalars['ID']
}

export interface MutationSceneMarkerUpdateArgs {
  input: SceneMarkerUpdateInput
}

export interface MutationSceneMergeArgs {
  input: SceneMergeInput
}

export interface MutationSceneResetOArgs {
  id: Scalars['ID']
}

export interface MutationSceneSaveActivityArgs {
  id: Scalars['ID']
  playDuration?: InputMaybe<Scalars['Float']>
  resume_time?: InputMaybe<Scalars['Float']>
}

export interface MutationSceneUpdateArgs {
  input: SceneUpdateInput
}

export interface MutationScenesDestroyArgs {
  input: ScenesDestroyInput
}

export interface MutationScenesUpdateArgs {
  input: SceneUpdateInput[]
}

export interface MutationSetDefaultFilterArgs {
  input: SetDefaultFilterInput
}

export interface MutationSetupArgs {
  input: SetupInput
}

export interface MutationStashBoxBatchPerformerTagArgs {
  input: StashBoxBatchPerformerTagInput
}

export interface MutationStopJobArgs {
  job_id: Scalars['ID']
}

export interface MutationStudioCreateArgs {
  input: StudioCreateInput
}

export interface MutationStudioDestroyArgs {
  input: StudioDestroyInput
}

export interface MutationStudioUpdateArgs {
  input: StudioUpdateInput
}

export interface MutationStudiosDestroyArgs {
  ids: Array<Scalars['ID']>
}

export interface MutationSubmitStashBoxFingerprintsArgs {
  input: StashBoxFingerprintSubmissionInput
}

export interface MutationSubmitStashBoxPerformerDraftArgs {
  input: StashBoxDraftSubmissionInput
}

export interface MutationSubmitStashBoxSceneDraftArgs {
  input: StashBoxDraftSubmissionInput
}

export interface MutationTagCreateArgs {
  input: TagCreateInput
}

export interface MutationTagDestroyArgs {
  input: TagDestroyInput
}

export interface MutationTagUpdateArgs {
  input: TagUpdateInput
}

export interface MutationTagsDestroyArgs {
  ids: Array<Scalars['ID']>
}

export interface MutationTagsMergeArgs {
  input: TagsMergeInput
}

export interface PHashDuplicationCriterionInput {
  /** Currently unimplemented */
  distance?: InputMaybe<Scalars['Int']>
  duplicated?: InputMaybe<Scalars['Boolean']>
}

export interface Performer {
  __typename?: 'Performer'
  aliases?: Maybe<Scalars['String']>
  birthdate?: Maybe<Scalars['String']>
  career_length?: Maybe<Scalars['String']>
  checksum: Scalars['String']
  country?: Maybe<Scalars['String']>
  created_at: Scalars['Time']
  death_date?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  ethnicity?: Maybe<Scalars['String']>
  eye_color?: Maybe<Scalars['String']>
  fake_tits?: Maybe<Scalars['String']>
  favorite: Scalars['Boolean']
  gallery_count?: Maybe<Scalars['Int']>
  gender?: Maybe<GenderEnum>
  hair_color?: Maybe<Scalars['String']>
  /** @deprecated Use height_cm */
  height?: Maybe<Scalars['String']>
  height_cm?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  ignore_auto_tag: Scalars['Boolean']
  image_count?: Maybe<Scalars['Int']>
  image_path?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  measurements?: Maybe<Scalars['String']>
  movie_count?: Maybe<Scalars['Int']>
  movies: Movie[]
  name?: Maybe<Scalars['String']>
  piercings?: Maybe<Scalars['String']>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars['Int']>
  rating100?: Maybe<Scalars['Int']>
  scene_count?: Maybe<Scalars['Int']>
  scenes: Scene[]
  stash_ids: StashId[]
  tags: Tag[]
  tattoos?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  updated_at: Scalars['Time']
  url?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Int']>
}

export interface PerformerCreateInput {
  aliases?: InputMaybe<Scalars['String']>
  birthdate?: InputMaybe<Scalars['String']>
  career_length?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  death_date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  ethnicity?: InputMaybe<Scalars['String']>
  eye_color?: InputMaybe<Scalars['String']>
  fake_tits?: InputMaybe<Scalars['String']>
  favorite?: InputMaybe<Scalars['Boolean']>
  gender?: InputMaybe<GenderEnum>
  hair_color?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['String']>
  height_cm?: InputMaybe<Scalars['Int']>
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>
  instagram?: InputMaybe<Scalars['String']>
  measurements?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  piercings?: InputMaybe<Scalars['String']>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  stash_ids?: InputMaybe<StashIdInput[]>
  tag_ids?: InputMaybe<Array<Scalars['ID']>>
  tattoos?: InputMaybe<Scalars['String']>
  twitter?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  weight?: InputMaybe<Scalars['Int']>
}

export interface PerformerDestroyInput {
  id: Scalars['ID']
}

export interface PerformerFilterType {
  AND?: InputMaybe<PerformerFilterType>
  NOT?: InputMaybe<PerformerFilterType>
  OR?: InputMaybe<PerformerFilterType>
  /** Filter by age */
  age?: InputMaybe<IntCriterionInput>
  /** Filter by aliases */
  aliases?: InputMaybe<StringCriterionInput>
  /** Filter by birth year */
  birth_year?: InputMaybe<IntCriterionInput>
  /** Filter by birthdate */
  birthdate?: InputMaybe<DateCriterionInput>
  /** Filter by career length */
  career_length?: InputMaybe<StringCriterionInput>
  /** Filter by country */
  country?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by death date */
  death_date?: InputMaybe<DateCriterionInput>
  /** Filter by death year */
  death_year?: InputMaybe<IntCriterionInput>
  details?: InputMaybe<StringCriterionInput>
  /** Filter by ethnicity */
  ethnicity?: InputMaybe<StringCriterionInput>
  /** Filter by eye color */
  eye_color?: InputMaybe<StringCriterionInput>
  /** Filter by fake tits value */
  fake_tits?: InputMaybe<StringCriterionInput>
  /** Filter by favorite */
  filter_favorites?: InputMaybe<Scalars['Boolean']>
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>
  /** Filter by gender */
  gender?: InputMaybe<GenderCriterionInput>
  /** Filter by hair color */
  hair_color?: InputMaybe<StringCriterionInput>
  /** Filter by height */
  height?: InputMaybe<StringCriterionInput>
  /** Filter by height in cm */
  height_cm?: InputMaybe<IntCriterionInput>
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include performers missing this property */
  is_missing?: InputMaybe<Scalars['String']>
  /** Filter by measurements */
  measurements?: InputMaybe<StringCriterionInput>
  name?: InputMaybe<StringCriterionInput>
  /** Filter by piercings */
  piercings?: InputMaybe<StringCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>
  /** Filter by StashID */
  stash_id?: InputMaybe<StringCriterionInput>
  /** Filter by StashID */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>
  /** Filter by studios where performer appears in scene/image/gallery */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include performers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tattoos */
  tattoos?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
  /** Filter by weight */
  weight?: InputMaybe<IntCriterionInput>
}

export interface PerformerUpdateInput {
  aliases?: InputMaybe<Scalars['String']>
  birthdate?: InputMaybe<Scalars['String']>
  career_length?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  death_date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  ethnicity?: InputMaybe<Scalars['String']>
  eye_color?: InputMaybe<Scalars['String']>
  fake_tits?: InputMaybe<Scalars['String']>
  favorite?: InputMaybe<Scalars['Boolean']>
  gender?: InputMaybe<GenderEnum>
  hair_color?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['String']>
  height_cm?: InputMaybe<Scalars['Int']>
  id: Scalars['ID']
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>
  instagram?: InputMaybe<Scalars['String']>
  measurements?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  piercings?: InputMaybe<Scalars['String']>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  stash_ids?: InputMaybe<StashIdInput[]>
  tag_ids?: InputMaybe<Array<Scalars['ID']>>
  tattoos?: InputMaybe<Scalars['String']>
  twitter?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  weight?: InputMaybe<Scalars['Int']>
}

export interface Plugin {
  __typename?: 'Plugin'
  description?: Maybe<Scalars['String']>
  hooks?: Maybe<PluginHook[]>
  id: Scalars['ID']
  name: Scalars['String']
  tasks?: Maybe<PluginTask[]>
  url?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export interface PluginArgInput {
  key: Scalars['String']
  value?: InputMaybe<PluginValueInput>
}

export interface PluginHook {
  __typename?: 'PluginHook'
  description?: Maybe<Scalars['String']>
  hooks?: Maybe<Array<Scalars['String']>>
  name: Scalars['String']
  plugin: Plugin
}

export interface PluginResult {
  __typename?: 'PluginResult'
  error?: Maybe<Scalars['String']>
  result?: Maybe<Scalars['String']>
}

export interface PluginTask {
  __typename?: 'PluginTask'
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  plugin: Plugin
}

export interface PluginValueInput {
  a?: InputMaybe<PluginValueInput[]>
  b?: InputMaybe<Scalars['Boolean']>
  f?: InputMaybe<Scalars['Float']>
  i?: InputMaybe<Scalars['Int']>
  o?: InputMaybe<PluginArgInput[]>
  str?: InputMaybe<Scalars['String']>
}

export enum PreviewPreset {
  /** X264_FAST */
  Fast = 'fast',
  /** X264_MEDIUM */
  Medium = 'medium',
  /** X264_SLOW */
  Slow = 'slow',
  /** X264_SLOWER */
  Slower = 'slower',
  /** X264_ULTRAFAST */
  Ultrafast = 'ultrafast',
  /** X264_VERYFAST */
  Veryfast = 'veryfast',
  /** X264_VERYSLOW */
  Veryslow = 'veryslow'
}

/** The query root for this schema */
export interface Query {
  __typename?: 'Query'
  allMovies: Movie[]
  allPerformers: Performer[]
  allStudios: Studio[]
  allTags: Tag[]
  /** Returns the current, complete configuration */
  configuration: ConfigResult
  /** Returns an array of paths for the given path */
  directory: Directory
  dlnaStatus: DlnaStatus
  findDefaultFilter?: Maybe<SavedFilter>
  /**  Returns any groups of scenes that are perceptual duplicates within the queried distance  */
  findDuplicateScenes: Scene[][]
  findGalleries: FindGalleriesResultType
  findGallery?: Maybe<Gallery>
  findImage?: Maybe<Image>
  /** A function which queries Scene objects */
  findImages: FindImagesResultType
  findJob?: Maybe<Job>
  /** Find a movie by ID */
  findMovie?: Maybe<Movie>
  /** A function which queries Movie objects */
  findMovies: FindMoviesResultType
  /** Find a performer by ID */
  findPerformer?: Maybe<Performer>
  /** A function which queries Performer objects */
  findPerformers: FindPerformersResultType
  findSavedFilter?: Maybe<SavedFilter>
  findSavedFilters: SavedFilter[]
  /** Find a scene by ID or Checksum */
  findScene?: Maybe<Scene>
  findSceneByHash?: Maybe<Scene>
  /** A function which queries SceneMarker objects */
  findSceneMarkers: FindSceneMarkersResultType
  /** A function which queries Scene objects */
  findScenes: FindScenesResultType
  findScenesByPathRegex: FindScenesResultType
  /** Find a studio by ID */
  findStudio?: Maybe<Studio>
  /** A function which queries Studio objects */
  findStudios: FindStudiosResultType
  findTag?: Maybe<Tag>
  findTags: FindTagsResultType
  jobQueue?: Maybe<Job[]>
  latestversion: ShortVersion
  /** @deprecated Use listScrapers(types: [GALLERY]) */
  listGalleryScrapers: Scraper[]
  /** @deprecated Use listScrapers(types: [MOVIE]) */
  listMovieScrapers: Scraper[]
  /** @deprecated Use listScrapers(types: [PERFORMER]) */
  listPerformerScrapers: Scraper[]
  /** @deprecated Use listScrapers(types: [SCENE]) */
  listSceneScrapers: Scraper[]
  /** List available scrapers */
  listScrapers: Scraper[]
  logs: LogEntry[]
  /** Get marker strings */
  markerStrings: Array<Maybe<MarkerStringsResultType>>
  /** Retrieve random scene markers for the wall */
  markerWall: SceneMarker[]
  parseSceneFilenames: SceneParserResultType
  /** List available plugin operations */
  pluginTasks?: Maybe<PluginTask[]>
  /** List loaded plugins */
  plugins?: Maybe<Plugin[]>
  /** Organize scene markers by tag for a given scene ID */
  sceneMarkerTags: SceneMarkerTag[]
  /** Return valid stream paths */
  sceneStreams: SceneStreamEndpoint[]
  /** Retrieve random scenes for the wall */
  sceneWall: Scene[]
  /**
   * Scrape a list of performers from a query
   * @deprecated use scrapeSinglePerformer with scraper_id = builtin_freeones
   */
  scrapeFreeonesPerformerList: Array<Scalars['String']>
  /**
   * Scrapes a complete gallery record based on an existing gallery
   * @deprecated use scrapeSingleGallery
   */
  scrapeGallery?: Maybe<ScrapedGallery>
  /** Scrapes a complete gallery record based on a URL */
  scrapeGalleryURL?: Maybe<ScrapedGallery>
  /** Scrapes a complete movie record based on a URL */
  scrapeMovieURL?: Maybe<ScrapedMovie>
  /** Scrape for multiple performers */
  scrapeMultiPerformers: ScrapedPerformer[][]
  /** Scrape for multiple scenes */
  scrapeMultiScenes: ScrapedScene[][]
  /**
   * Scrapes a complete performer record based on a scrapePerformerList result
   * @deprecated use scrapeSinglePerformer
   */
  scrapePerformer?: Maybe<ScrapedPerformer>
  /**
   * Scrape a list of performers based on name
   * @deprecated use scrapeSinglePerformer
   */
  scrapePerformerList: ScrapedPerformer[]
  /** Scrapes a complete performer record based on a URL */
  scrapePerformerURL?: Maybe<ScrapedPerformer>
  /**
   * Scrapes a complete scene record based on an existing scene
   * @deprecated use scrapeSingleScene
   */
  scrapeScene?: Maybe<ScrapedScene>
  /** Scrapes a complete performer record based on a URL */
  scrapeSceneURL?: Maybe<ScrapedScene>
  /** Scrape for a single gallery */
  scrapeSingleGallery: ScrapedGallery[]
  /** Scrape for a single movie */
  scrapeSingleMovie: ScrapedMovie[]
  /** Scrape for a single performer */
  scrapeSinglePerformer: ScrapedPerformer[]
  /** Scrape for a single scene */
  scrapeSingleScene: ScrapedScene[]
  /** Scrapes content based on a URL */
  scrapeURL?: Maybe<ScrapedContent>
  /** Get stats */
  stats: StatsResultType
  systemStatus: SystemStatus
  validateStashBoxCredentials: StashBoxValidationResult
  version: Version
}

/** The query root for this schema */
export interface QueryDirectoryArgs {
  locale?: InputMaybe<Scalars['String']>
  path?: InputMaybe<Scalars['String']>
}

/** The query root for this schema */
export interface QueryFindDefaultFilterArgs {
  mode: FilterMode
}

/** The query root for this schema */
export interface QueryFindDuplicateScenesArgs {
  distance?: InputMaybe<Scalars['Int']>
}

/** The query root for this schema */
export interface QueryFindGalleriesArgs {
  filter?: InputMaybe<FindFilterType>
  gallery_filter?: InputMaybe<GalleryFilterType>
}

/** The query root for this schema */
export interface QueryFindGalleryArgs {
  id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryFindImageArgs {
  checksum?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The query root for this schema */
export interface QueryFindImagesArgs {
  filter?: InputMaybe<FindFilterType>
  image_filter?: InputMaybe<ImageFilterType>
  image_ids?: InputMaybe<Array<Scalars['Int']>>
}

/** The query root for this schema */
export interface QueryFindJobArgs {
  input: FindJobInput
}

/** The query root for this schema */
export interface QueryFindMovieArgs {
  id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryFindMoviesArgs {
  filter?: InputMaybe<FindFilterType>
  movie_filter?: InputMaybe<MovieFilterType>
}

/** The query root for this schema */
export interface QueryFindPerformerArgs {
  id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryFindPerformersArgs {
  filter?: InputMaybe<FindFilterType>
  performer_filter?: InputMaybe<PerformerFilterType>
}

/** The query root for this schema */
export interface QueryFindSavedFilterArgs {
  id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryFindSavedFiltersArgs {
  mode?: InputMaybe<FilterMode>
}

/** The query root for this schema */
export interface QueryFindSceneArgs {
  checksum?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The query root for this schema */
export interface QueryFindSceneByHashArgs {
  input: SceneHashInput
}

/** The query root for this schema */
export interface QueryFindSceneMarkersArgs {
  filter?: InputMaybe<FindFilterType>
  scene_marker_filter?: InputMaybe<SceneMarkerFilterType>
}

/** The query root for this schema */
export interface QueryFindScenesArgs {
  filter?: InputMaybe<FindFilterType>
  scene_filter?: InputMaybe<SceneFilterType>
  scene_ids?: InputMaybe<Array<Scalars['Int']>>
}

/** The query root for this schema */
export interface QueryFindScenesByPathRegexArgs {
  filter?: InputMaybe<FindFilterType>
}

/** The query root for this schema */
export interface QueryFindStudioArgs {
  id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryFindStudiosArgs {
  filter?: InputMaybe<FindFilterType>
  studio_filter?: InputMaybe<StudioFilterType>
}

/** The query root for this schema */
export interface QueryFindTagArgs {
  id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryFindTagsArgs {
  filter?: InputMaybe<FindFilterType>
  tag_filter?: InputMaybe<TagFilterType>
}

/** The query root for this schema */
export interface QueryListScrapersArgs {
  types: ScrapeContentType[]
}

/** The query root for this schema */
export interface QueryMarkerStringsArgs {
  q?: InputMaybe<Scalars['String']>
  sort?: InputMaybe<Scalars['String']>
}

/** The query root for this schema */
export interface QueryMarkerWallArgs {
  q?: InputMaybe<Scalars['String']>
}

/** The query root for this schema */
export interface QueryParseSceneFilenamesArgs {
  config: SceneParserInput
  filter?: InputMaybe<FindFilterType>
}

/** The query root for this schema */
export interface QuerySceneMarkerTagsArgs {
  scene_id: Scalars['ID']
}

/** The query root for this schema */
export interface QuerySceneStreamsArgs {
  id?: InputMaybe<Scalars['ID']>
}

/** The query root for this schema */
export interface QuerySceneWallArgs {
  q?: InputMaybe<Scalars['String']>
}

/** The query root for this schema */
export interface QueryScrapeFreeonesPerformerListArgs {
  query: Scalars['String']
}

/** The query root for this schema */
export interface QueryScrapeGalleryArgs {
  gallery: GalleryUpdateInput
  scraper_id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryScrapeGalleryUrlArgs {
  url: Scalars['String']
}

/** The query root for this schema */
export interface QueryScrapeMovieUrlArgs {
  url: Scalars['String']
}

/** The query root for this schema */
export interface QueryScrapeMultiPerformersArgs {
  input: ScrapeMultiPerformersInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export interface QueryScrapeMultiScenesArgs {
  input: ScrapeMultiScenesInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export interface QueryScrapePerformerArgs {
  scraped_performer: ScrapedPerformerInput
  scraper_id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryScrapePerformerListArgs {
  query: Scalars['String']
  scraper_id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryScrapePerformerUrlArgs {
  url: Scalars['String']
}

/** The query root for this schema */
export interface QueryScrapeSceneArgs {
  scene: SceneUpdateInput
  scraper_id: Scalars['ID']
}

/** The query root for this schema */
export interface QueryScrapeSceneUrlArgs {
  url: Scalars['String']
}

/** The query root for this schema */
export interface QueryScrapeSingleGalleryArgs {
  input: ScrapeSingleGalleryInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export interface QueryScrapeSingleMovieArgs {
  input: ScrapeSingleMovieInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export interface QueryScrapeSinglePerformerArgs {
  input: ScrapeSinglePerformerInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export interface QueryScrapeSingleSceneArgs {
  input: ScrapeSingleSceneInput
  source: ScraperSourceInput
}

/** The query root for this schema */
export interface QueryScrapeUrlArgs {
  ty: ScrapeContentType
  url: Scalars['String']
}

/** The query root for this schema */
export interface QueryValidateStashBoxCredentialsArgs {
  input: StashBoxInput
}

export interface RemoveTempDlnaipInput {
  address: Scalars['String']
}

export interface ResolutionCriterionInput {
  modifier: CriterionModifier
  value: ResolutionEnum
}

export enum ResolutionEnum {
  /** 8k */
  EightK = 'EIGHT_K',
  /** 5k */
  FiveK = 'FIVE_K',
  /** 4k */
  FourK = 'FOUR_K',
  /** 1080p */
  FullHd = 'FULL_HD',
  /** 240p */
  Low = 'LOW',
  /** 1440p */
  QuadHd = 'QUAD_HD',
  /** 360p */
  R360P = 'R360P',
  /** 6k */
  SixK = 'SIX_K',
  /** 480p */
  Standard = 'STANDARD',
  /** 720p */
  StandardHd = 'STANDARD_HD',
  /** 144p */
  VeryLow = 'VERY_LOW',
  /** 1920p */
  VrHd = 'VR_HD',
  /** 540p */
  WebHd = 'WEB_HD'
}

export interface SaveFilterInput {
  /** JSON-encoded filter string */
  filter: Scalars['String']
  /** provide ID to overwrite existing filter */
  id?: InputMaybe<Scalars['ID']>
  mode: FilterMode
  name: Scalars['String']
}

export interface SavedFilter {
  __typename?: 'SavedFilter'
  /** JSON-encoded filter string */
  filter: Scalars['String']
  id: Scalars['ID']
  mode: FilterMode
  name: Scalars['String']
}

/** Filter options for meta data scannning */
export interface ScanMetaDataFilterInput {
  /** If set, files with a modification time before this time point are ignored by the scan */
  minModTime?: InputMaybe<Scalars['Timestamp']>
}

export interface ScanMetadataInput {
  /** Filter options for the scan */
  filter?: InputMaybe<ScanMetaDataFilterInput>
  paths?: InputMaybe<Array<Scalars['String']>>
  /** Generate image previews during scan */
  scanGenerateImagePreviews?: InputMaybe<Scalars['Boolean']>
  /** Generate phashes during scan */
  scanGeneratePhashes?: InputMaybe<Scalars['Boolean']>
  /** Generate previews during scan */
  scanGeneratePreviews?: InputMaybe<Scalars['Boolean']>
  /** Generate sprites during scan */
  scanGenerateSprites?: InputMaybe<Scalars['Boolean']>
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails?: InputMaybe<Scalars['Boolean']>
  /** Strip file extension from title */
  stripFileExtension?: InputMaybe<Scalars['Boolean']>
  /** Set name, date, details from metadata (if present) */
  useFileMetadata?: InputMaybe<Scalars['Boolean']>
}

export interface ScanMetadataOptions {
  __typename?: 'ScanMetadataOptions'
  /** Generate image previews during scan */
  scanGenerateImagePreviews: Scalars['Boolean']
  /** Generate phashes during scan */
  scanGeneratePhashes: Scalars['Boolean']
  /** Generate previews during scan */
  scanGeneratePreviews: Scalars['Boolean']
  /** Generate sprites during scan */
  scanGenerateSprites: Scalars['Boolean']
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails: Scalars['Boolean']
  /** Strip file extension from title */
  stripFileExtension: Scalars['Boolean']
  /** Set name, date, details from metadata (if present) */
  useFileMetadata: Scalars['Boolean']
}

export interface Scene {
  __typename?: 'Scene'
  captions?: Maybe<VideoCaption[]>
  /** @deprecated Use files.fingerprints */
  checksum?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_at: Scalars['Time']
  date?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  director?: Maybe<Scalars['String']>
  /** @deprecated Use files */
  file: SceneFileType
  file_mod_time?: Maybe<Scalars['Time']>
  files: VideoFile[]
  galleries: Gallery[]
  id: Scalars['ID']
  interactive: Scalars['Boolean']
  interactive_speed?: Maybe<Scalars['Int']>
  /** The last time play count was updated */
  last_played_at?: Maybe<Scalars['Time']>
  movies: SceneMovie[]
  o_counter?: Maybe<Scalars['Int']>
  organized: Scalars['Boolean']
  /** @deprecated Use files.fingerprints */
  oshash?: Maybe<Scalars['String']>
  /** @deprecated Use files.path */
  path: Scalars['String']
  paths: ScenePathsType
  performers: Performer[]
  /** @deprecated Use files.fingerprints */
  phash?: Maybe<Scalars['String']>
  /** The number ot times a scene has been played */
  play_count?: Maybe<Scalars['Int']>
  /** The total time a scene has spent playing */
  play_duration?: Maybe<Scalars['Float']>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars['Int']>
  rating100?: Maybe<Scalars['Int']>
  /** The time index a scene was left at */
  resume_time?: Maybe<Scalars['Float']>
  /** Return valid stream paths */
  sceneStreams: SceneStreamEndpoint[]
  scene_markers: SceneMarker[]
  stash_ids: StashId[]
  studio?: Maybe<Studio>
  tags: Tag[]
  title?: Maybe<Scalars['String']>
  updated_at: Scalars['Time']
  url?: Maybe<Scalars['String']>
}

export interface SceneCreateInput {
  code?: InputMaybe<Scalars['String']>
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  director?: InputMaybe<Scalars['String']>
  /**
   * The first id will be assigned as primary. Files will be reassigned from
   *   existing scenes if applicable. Files must not already be primary for another scene
   */
  file_ids?: InputMaybe<Array<Scalars['ID']>>
  gallery_ids?: InputMaybe<Array<Scalars['ID']>>
  movies?: InputMaybe<SceneMovieInput[]>
  organized?: InputMaybe<Scalars['Boolean']>
  performer_ids?: InputMaybe<Array<Scalars['ID']>>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  stash_ids?: InputMaybe<StashIdInput[]>
  studio_id?: InputMaybe<Scalars['ID']>
  tag_ids?: InputMaybe<Array<Scalars['ID']>>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export interface SceneDestroyInput {
  delete_file?: InputMaybe<Scalars['Boolean']>
  delete_generated?: InputMaybe<Scalars['Boolean']>
  id: Scalars['ID']
}

export interface SceneFileType {
  __typename?: 'SceneFileType'
  audio_codec?: Maybe<Scalars['String']>
  bitrate?: Maybe<Scalars['Int']>
  duration?: Maybe<Scalars['Float']>
  framerate?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Int']>
  size?: Maybe<Scalars['String']>
  video_codec?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

export interface SceneFilterType {
  AND?: InputMaybe<SceneFilterType>
  NOT?: InputMaybe<SceneFilterType>
  OR?: InputMaybe<SceneFilterType>
  /** Filter by captions */
  captions?: InputMaybe<StringCriterionInput>
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>
  code?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>
  details?: InputMaybe<StringCriterionInput>
  director?: InputMaybe<StringCriterionInput>
  /** Filter Scenes that have an exact phash match available */
  duplicated?: InputMaybe<PHashDuplicationCriterionInput>
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>
  /** Filter by file count */
  file_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include scenes which have markers. `true` or `false` */
  has_markers?: InputMaybe<Scalars['String']>
  id?: InputMaybe<IntCriterionInput>
  /** Filter by interactive */
  interactive?: InputMaybe<Scalars['Boolean']>
  /** Filter by InteractiveSpeed */
  interactive_speed?: InputMaybe<IntCriterionInput>
  /** Filter to only include scenes missing this property */
  is_missing?: InputMaybe<Scalars['String']>
  /** Filter to only include scenes with this movie */
  movies?: InputMaybe<MultiCriterionInput>
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']>
  /** Filter by file oshash */
  oshash?: InputMaybe<StringCriterionInput>
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>
  /** Filter scenes by performer age at time of scene */
  performer_age?: InputMaybe<IntCriterionInput>
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>
  /** Filter scenes that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']>
  /** Filter to only include scenes with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter to only include scenes with these performers */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by file phash */
  phash?: InputMaybe<StringCriterionInput>
  /** Filter by play count */
  play_count?: InputMaybe<IntCriterionInput>
  /** Filter by play duration (in seconds) */
  play_duration?: InputMaybe<IntCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>
  /** Filter by resume time */
  resume_time?: InputMaybe<IntCriterionInput>
  /** Filter by StashID */
  stash_id?: InputMaybe<StringCriterionInput>
  /** Filter by StashID */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>
  /** Filter to only include scenes with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include scenes with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  title?: InputMaybe<StringCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
}

export interface SceneHashInput {
  checksum?: InputMaybe<Scalars['String']>
  oshash?: InputMaybe<Scalars['String']>
}

export interface SceneMarker {
  __typename?: 'SceneMarker'
  created_at: Scalars['Time']
  id: Scalars['ID']
  /** The path to the preview image for this marker */
  preview: Scalars['String']
  primary_tag: Tag
  scene: Scene
  /** The path to the screenshot image for this marker */
  screenshot: Scalars['String']
  seconds: Scalars['Float']
  /** The path to stream this marker */
  stream: Scalars['String']
  tags: Tag[]
  title: Scalars['String']
  updated_at: Scalars['Time']
}

export interface SceneMarkerCreateInput {
  primary_tag_id: Scalars['ID']
  scene_id: Scalars['ID']
  seconds: Scalars['Float']
  tag_ids?: InputMaybe<Array<Scalars['ID']>>
  title: Scalars['String']
}

export interface SceneMarkerFilterType {
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter to only include scene markers with these performers */
  performers?: InputMaybe<MultiCriterionInput>
  /** Filter by cscene reation time */
  scene_created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by scene date */
  scene_date?: InputMaybe<DateCriterionInput>
  /** Filter to only include scene markers attached to a scene with these tags */
  scene_tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by lscene ast update time */
  scene_updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter to only include scene markers with this tag */
  tag_id?: InputMaybe<Scalars['ID']>
  /** Filter to only include scene markers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
}

export interface SceneMarkerTag {
  __typename?: 'SceneMarkerTag'
  scene_markers: SceneMarker[]
  tag: Tag
}

export interface SceneMarkerUpdateInput {
  id: Scalars['ID']
  primary_tag_id: Scalars['ID']
  scene_id: Scalars['ID']
  seconds: Scalars['Float']
  tag_ids?: InputMaybe<Array<Scalars['ID']>>
  title: Scalars['String']
}

export interface SceneMergeInput {
  destination: Scalars['ID']
  /**
   * If destination scene has no files, then the primary file of the
   *   first source scene will be assigned as primary
   */
  source: Array<Scalars['ID']>
  values?: InputMaybe<SceneUpdateInput>
}

export interface SceneMovie {
  __typename?: 'SceneMovie'
  movie: Movie
  scene_index?: Maybe<Scalars['Int']>
}

export interface SceneMovieId {
  __typename?: 'SceneMovieID'
  movie_id: Scalars['ID']
  scene_index?: Maybe<Scalars['String']>
}

export interface SceneMovieInput {
  movie_id: Scalars['ID']
  scene_index?: InputMaybe<Scalars['Int']>
}

export interface SceneParserInput {
  capitalizeTitle?: InputMaybe<Scalars['Boolean']>
  ignoreOrganized?: InputMaybe<Scalars['Boolean']>
  ignoreWords?: InputMaybe<Array<Scalars['String']>>
  whitespaceCharacters?: InputMaybe<Scalars['String']>
}

export interface SceneParserResult {
  __typename?: 'SceneParserResult'
  code?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  director?: Maybe<Scalars['String']>
  gallery_ids?: Maybe<Array<Scalars['ID']>>
  movies?: Maybe<SceneMovieId[]>
  performer_ids?: Maybe<Array<Scalars['ID']>>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars['Int']>
  rating100?: Maybe<Scalars['Int']>
  scene: Scene
  studio_id?: Maybe<Scalars['ID']>
  tag_ids?: Maybe<Array<Scalars['ID']>>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export interface SceneParserResultType {
  __typename?: 'SceneParserResultType'
  count: Scalars['Int']
  results: SceneParserResult[]
}

export interface ScenePathsType {
  __typename?: 'ScenePathsType'
  caption?: Maybe<Scalars['String']>
  chapters_vtt?: Maybe<Scalars['String']>
  funscript?: Maybe<Scalars['String']>
  interactive_heatmap?: Maybe<Scalars['String']>
  preview?: Maybe<Scalars['String']>
  screenshot?: Maybe<Scalars['String']>
  sprite?: Maybe<Scalars['String']>
  stream?: Maybe<Scalars['String']>
  vtt?: Maybe<Scalars['String']>
  webp?: Maybe<Scalars['String']>
}

export interface SceneStreamEndpoint {
  __typename?: 'SceneStreamEndpoint'
  label?: Maybe<Scalars['String']>
  mime_type?: Maybe<Scalars['String']>
  url: Scalars['String']
}

export interface SceneUpdateInput {
  clientMutationId?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['String']>
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  director?: InputMaybe<Scalars['String']>
  gallery_ids?: InputMaybe<Array<Scalars['ID']>>
  id: Scalars['ID']
  movies?: InputMaybe<SceneMovieInput[]>
  o_counter?: InputMaybe<Scalars['Int']>
  organized?: InputMaybe<Scalars['Boolean']>
  performer_ids?: InputMaybe<Array<Scalars['ID']>>
  /** The number ot times a scene has been played */
  play_count?: InputMaybe<Scalars['Int']>
  /** The total time a scene has spent playing */
  play_duration?: InputMaybe<Scalars['Float']>
  primary_file_id?: InputMaybe<Scalars['ID']>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  /** The time index a scene was left at */
  resume_time?: InputMaybe<Scalars['Float']>
  stash_ids?: InputMaybe<StashIdInput[]>
  studio_id?: InputMaybe<Scalars['ID']>
  tag_ids?: InputMaybe<Array<Scalars['ID']>>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export interface ScenesDestroyInput {
  delete_file?: InputMaybe<Scalars['Boolean']>
  delete_generated?: InputMaybe<Scalars['Boolean']>
  ids: Array<Scalars['ID']>
}

/** Type of the content a scraper generates */
export enum ScrapeContentType {
  Gallery = 'GALLERY',
  Movie = 'MOVIE',
  Performer = 'PERFORMER',
  Scene = 'SCENE'
}

export interface ScrapeMultiPerformersInput {
  /** Instructs to query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars['ID']>>
}

export interface ScrapeMultiScenesInput {
  /** Instructs to query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars['ID']>>
}

export interface ScrapeSingleGalleryInput {
  /** Instructs to query by gallery id */
  gallery_id?: InputMaybe<Scalars['ID']>
  /** Instructs to query by gallery fragment */
  gallery_input?: InputMaybe<ScrapedGalleryInput>
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>
}

export interface ScrapeSingleMovieInput {
  /** Instructs to query by movie id */
  movie_id?: InputMaybe<Scalars['ID']>
  /** Instructs to query by gallery fragment */
  movie_input?: InputMaybe<ScrapedMovieInput>
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>
}

export interface ScrapeSinglePerformerInput {
  /** Instructs to query by performer id */
  performer_id?: InputMaybe<Scalars['ID']>
  /** Instructs to query by performer fragment */
  performer_input?: InputMaybe<ScrapedPerformerInput>
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>
}

export interface ScrapeSingleSceneInput {
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>
  /** Instructs to query by scene fingerprints */
  scene_id?: InputMaybe<Scalars['ID']>
  /** Instructs to query by scene fragment */
  scene_input?: InputMaybe<ScrapedSceneInput>
}

export enum ScrapeType {
  /** From existing object */
  Fragment = 'FRAGMENT',
  /** From text query */
  Name = 'NAME',
  /** From URL */
  Url = 'URL'
}

/** Scraped Content is the forming union over the different scrapers */
export type ScrapedContent =
  | ScrapedGallery
  | ScrapedMovie
  | ScrapedPerformer
  | ScrapedScene
  | ScrapedStudio
  | ScrapedTag

export interface ScrapedGallery {
  __typename?: 'ScrapedGallery'
  date?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  performers?: Maybe<ScrapedPerformer[]>
  studio?: Maybe<ScrapedStudio>
  tags?: Maybe<ScrapedTag[]>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export interface ScrapedGalleryInput {
  date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

/** A movie from a scraping operation... */
export interface ScrapedMovie {
  __typename?: 'ScrapedMovie'
  aliases?: Maybe<Scalars['String']>
  /** This should be a base64 encoded data URL */
  back_image?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['String']>
  director?: Maybe<Scalars['String']>
  duration?: Maybe<Scalars['String']>
  /** This should be a base64 encoded data URL */
  front_image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  rating?: Maybe<Scalars['String']>
  stored_id?: Maybe<Scalars['ID']>
  studio?: Maybe<ScrapedStudio>
  synopsis?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export interface ScrapedMovieInput {
  aliases?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  director?: InputMaybe<Scalars['String']>
  duration?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  rating?: InputMaybe<Scalars['String']>
  synopsis?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

/** A performer from a scraping operation... */
export interface ScrapedPerformer {
  __typename?: 'ScrapedPerformer'
  aliases?: Maybe<Scalars['String']>
  birthdate?: Maybe<Scalars['String']>
  career_length?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  death_date?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  ethnicity?: Maybe<Scalars['String']>
  eye_color?: Maybe<Scalars['String']>
  fake_tits?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
  hair_color?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['String']>
  /**
   * This should be a base64 encoded data URL
   * @deprecated use images instead
   */
  image?: Maybe<Scalars['String']>
  images?: Maybe<Array<Scalars['String']>>
  instagram?: Maybe<Scalars['String']>
  measurements?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  piercings?: Maybe<Scalars['String']>
  remote_site_id?: Maybe<Scalars['String']>
  /** Set if performer matched */
  stored_id?: Maybe<Scalars['ID']>
  tags?: Maybe<ScrapedTag[]>
  tattoos?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['String']>
}

export interface ScrapedPerformerInput {
  aliases?: InputMaybe<Scalars['String']>
  birthdate?: InputMaybe<Scalars['String']>
  career_length?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  death_date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  ethnicity?: InputMaybe<Scalars['String']>
  eye_color?: InputMaybe<Scalars['String']>
  fake_tits?: InputMaybe<Scalars['String']>
  gender?: InputMaybe<Scalars['String']>
  hair_color?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['String']>
  instagram?: InputMaybe<Scalars['String']>
  measurements?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  piercings?: InputMaybe<Scalars['String']>
  remote_site_id?: InputMaybe<Scalars['String']>
  /** Set if performer matched */
  stored_id?: InputMaybe<Scalars['ID']>
  tattoos?: InputMaybe<Scalars['String']>
  twitter?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  weight?: InputMaybe<Scalars['String']>
}

export interface ScrapedScene {
  __typename?: 'ScrapedScene'
  code?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['String']>
  details?: Maybe<Scalars['String']>
  director?: Maybe<Scalars['String']>
  duration?: Maybe<Scalars['Int']>
  file?: Maybe<SceneFileType>
  fingerprints?: Maybe<StashBoxFingerprint[]>
  /** This should be a base64 encoded data URL */
  image?: Maybe<Scalars['String']>
  movies?: Maybe<ScrapedMovie[]>
  performers?: Maybe<ScrapedPerformer[]>
  remote_site_id?: Maybe<Scalars['String']>
  studio?: Maybe<ScrapedStudio>
  tags?: Maybe<ScrapedTag[]>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export interface ScrapedSceneInput {
  code?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['String']>
  director?: InputMaybe<Scalars['String']>
  remote_site_id?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export interface ScrapedStudio {
  __typename?: 'ScrapedStudio'
  image?: Maybe<Scalars['String']>
  name: Scalars['String']
  remote_site_id?: Maybe<Scalars['String']>
  /** Set if studio matched */
  stored_id?: Maybe<Scalars['ID']>
  url?: Maybe<Scalars['String']>
}

export interface ScrapedTag {
  __typename?: 'ScrapedTag'
  name: Scalars['String']
  /** Set if tag matched */
  stored_id?: Maybe<Scalars['ID']>
}

export interface Scraper {
  __typename?: 'Scraper'
  /** Details for gallery scraper */
  gallery?: Maybe<ScraperSpec>
  id: Scalars['ID']
  /** Details for movie scraper */
  movie?: Maybe<ScraperSpec>
  name: Scalars['String']
  /** Details for performer scraper */
  performer?: Maybe<ScraperSpec>
  /** Details for scene scraper */
  scene?: Maybe<ScraperSpec>
}

export interface ScraperSource {
  __typename?: 'ScraperSource'
  /** Scraper ID to scrape with. Should be unset if stash_box_index is set */
  scraper_id?: Maybe<Scalars['ID']>
  /** Stash-box endpoint */
  stash_box_endpoint?: Maybe<Scalars['String']>
  /**
   * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: Maybe<Scalars['Int']>
}

export interface ScraperSourceInput {
  /** Scraper ID to scrape with. Should be unset if stash_box_index is set */
  scraper_id?: InputMaybe<Scalars['ID']>
  /** Stash-box endpoint */
  stash_box_endpoint?: InputMaybe<Scalars['String']>
  /** Index of the configured stash-box instance to use. Should be unset if scraper_id is set */
  stash_box_index?: InputMaybe<Scalars['Int']>
}

export interface ScraperSpec {
  __typename?: 'ScraperSpec'
  supported_scrapes: ScrapeType[]
  /** URLs matching these can be scraped with */
  urls?: Maybe<Array<Scalars['String']>>
}

export interface SetDefaultFilterInput {
  /** JSON-encoded filter string - null to clear */
  filter?: InputMaybe<Scalars['String']>
  mode: FilterMode
}

export interface SetupInput {
  /** Empty to indicate $HOME/.stash/config.yml default */
  configLocation: Scalars['String']
  /** Empty to indicate default */
  databaseFile: Scalars['String']
  /** Empty to indicate default */
  generatedLocation: Scalars['String']
  stashes: StashConfigInput[]
}

export interface ShortVersion {
  __typename?: 'ShortVersion'
  shorthash: Scalars['String']
  url: Scalars['String']
}

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export interface StashBox {
  __typename?: 'StashBox'
  api_key: Scalars['String']
  endpoint: Scalars['String']
  name: Scalars['String']
}

/** If neither performer_ids nor performer_names are set, tag all performers */
export interface StashBoxBatchPerformerTagInput {
  /** Stash endpoint to use for the performer tagging */
  endpoint: Scalars['Int']
  /** Fields to exclude when executing the performer tagging */
  exclude_fields?: InputMaybe<Array<Scalars['String']>>
  /** If set, only tag these performer ids */
  performer_ids?: InputMaybe<Array<Scalars['ID']>>
  /** If set, only tag these performer names */
  performer_names?: InputMaybe<Array<Scalars['String']>>
  /** Refresh performers already tagged by StashBox if true. Only tag performers with no StashBox tagging if false */
  refresh: Scalars['Boolean']
}

export interface StashBoxDraftSubmissionInput {
  id: Scalars['String']
  stash_box_index: Scalars['Int']
}

export interface StashBoxFingerprint {
  __typename?: 'StashBoxFingerprint'
  algorithm: Scalars['String']
  duration: Scalars['Int']
  hash: Scalars['String']
}

export interface StashBoxFingerprintSubmissionInput {
  scene_ids: Array<Scalars['String']>
  stash_box_index: Scalars['Int']
}

export interface StashBoxInput {
  api_key: Scalars['String']
  endpoint: Scalars['String']
  name: Scalars['String']
}

export interface StashBoxPerformerQueryInput {
  /** Instructs query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars['ID']>>
  /** Query by query string */
  q?: InputMaybe<Scalars['String']>
  /** Index of the configured stash-box instance to use */
  stash_box_index: Scalars['Int']
}

export interface StashBoxPerformerQueryResult {
  __typename?: 'StashBoxPerformerQueryResult'
  query: Scalars['String']
  results: ScrapedPerformer[]
}

export interface StashBoxSceneQueryInput {
  /** Query by query string */
  q?: InputMaybe<Scalars['String']>
  /** Instructs query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars['ID']>>
  /** Index of the configured stash-box instance to use */
  stash_box_index: Scalars['Int']
}

export interface StashBoxValidationResult {
  __typename?: 'StashBoxValidationResult'
  status: Scalars['String']
  valid: Scalars['Boolean']
}

export interface StashConfig {
  __typename?: 'StashConfig'
  excludeImage: Scalars['Boolean']
  excludeVideo: Scalars['Boolean']
  path: Scalars['String']
}

/** Stash configuration details */
export interface StashConfigInput {
  excludeImage: Scalars['Boolean']
  excludeVideo: Scalars['Boolean']
  path: Scalars['String']
}

export interface StashId {
  __typename?: 'StashID'
  endpoint: Scalars['String']
  stash_id: Scalars['String']
}

export interface StashIdCriterionInput {
  /**
   * If present, this value is treated as a predicate.
   *   That is, it will filter based on stash_ids with the matching endpoint
   */
  endpoint?: InputMaybe<Scalars['String']>
  modifier: CriterionModifier
  stash_id?: InputMaybe<Scalars['String']>
}

export interface StashIdInput {
  endpoint: Scalars['String']
  stash_id: Scalars['String']
}

export interface StatsResultType {
  __typename?: 'StatsResultType'
  gallery_count: Scalars['Int']
  image_count: Scalars['Int']
  images_size: Scalars['Float']
  movie_count: Scalars['Int']
  performer_count: Scalars['Int']
  scene_count: Scalars['Int']
  scenes_duration: Scalars['Float']
  scenes_size: Scalars['Float']
  studio_count: Scalars['Int']
  tag_count: Scalars['Int']
}

export enum StreamingResolutionEnum {
  /** 4k */
  FourK = 'FOUR_K',
  /** 1080p */
  FullHd = 'FULL_HD',
  /** 240p */
  Low = 'LOW',
  /** Original */
  Original = 'ORIGINAL',
  /** 480p */
  Standard = 'STANDARD',
  /** 720p */
  StandardHd = 'STANDARD_HD'
}

export interface StringCriterionInput {
  modifier: CriterionModifier
  value: Scalars['String']
}

export interface Studio {
  __typename?: 'Studio'
  aliases: Array<Scalars['String']>
  checksum: Scalars['String']
  child_studios: Studio[]
  created_at: Scalars['Time']
  details?: Maybe<Scalars['String']>
  gallery_count?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  ignore_auto_tag: Scalars['Boolean']
  image_count?: Maybe<Scalars['Int']>
  image_path?: Maybe<Scalars['String']>
  movie_count?: Maybe<Scalars['Int']>
  movies: Movie[]
  name: Scalars['String']
  parent_studio?: Maybe<Studio>
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars['Int']>
  rating100?: Maybe<Scalars['Int']>
  scene_count?: Maybe<Scalars['Int']>
  stash_ids: StashId[]
  updated_at: Scalars['Time']
  url?: Maybe<Scalars['String']>
}

export interface StudioCreateInput {
  aliases?: InputMaybe<Array<Scalars['String']>>
  details?: InputMaybe<Scalars['String']>
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  parent_id?: InputMaybe<Scalars['ID']>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  stash_ids?: InputMaybe<StashIdInput[]>
  url?: InputMaybe<Scalars['String']>
}

export interface StudioDestroyInput {
  id: Scalars['ID']
}

export interface StudioFilterType {
  AND?: InputMaybe<StudioFilterType>
  NOT?: InputMaybe<StudioFilterType>
  OR?: InputMaybe<StudioFilterType>
  /** Filter by studio aliases */
  aliases?: InputMaybe<StringCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  details?: InputMaybe<StringCriterionInput>
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include studios missing this property */
  is_missing?: InputMaybe<Scalars['String']>
  name?: InputMaybe<StringCriterionInput>
  /** Filter to only include studios with this parent studio */
  parents?: InputMaybe<MultiCriterionInput>
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>
  rating100?: InputMaybe<IntCriterionInput>
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>
  /** Filter by StashID */
  stash_id?: InputMaybe<StringCriterionInput>
  /** Filter by StashID */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>
}

export interface StudioUpdateInput {
  aliases?: InputMaybe<Array<Scalars['String']>>
  details?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  parent_id?: InputMaybe<Scalars['ID']>
  rating?: InputMaybe<Scalars['Int']>
  rating100?: InputMaybe<Scalars['Int']>
  stash_ids?: InputMaybe<StashIdInput[]>
  url?: InputMaybe<Scalars['String']>
}

export interface Subscription {
  __typename?: 'Subscription'
  /** Update from the metadata manager */
  jobsSubscribe: JobStatusUpdate
  loggingSubscribe: LogEntry[]
  scanCompleteSubscribe: Scalars['Boolean']
}

export interface SystemStatus {
  __typename?: 'SystemStatus'
  appSchema: Scalars['Int']
  configPath?: Maybe<Scalars['String']>
  databasePath?: Maybe<Scalars['String']>
  databaseSchema?: Maybe<Scalars['Int']>
  status: SystemStatusEnum
}

export enum SystemStatusEnum {
  NeedsMigration = 'NEEDS_MIGRATION',
  Ok = 'OK',
  Setup = 'SETUP'
}

export interface Tag {
  __typename?: 'Tag'
  aliases: Array<Scalars['String']>
  children: Tag[]
  created_at: Scalars['Time']
  description?: Maybe<Scalars['String']>
  gallery_count?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  ignore_auto_tag: Scalars['Boolean']
  image_count?: Maybe<Scalars['Int']>
  image_path?: Maybe<Scalars['String']>
  name: Scalars['String']
  parents: Tag[]
  performer_count?: Maybe<Scalars['Int']>
  scene_count?: Maybe<Scalars['Int']>
  scene_marker_count?: Maybe<Scalars['Int']>
  updated_at: Scalars['Time']
}

export interface TagCreateInput {
  aliases?: InputMaybe<Array<Scalars['String']>>
  child_ids?: InputMaybe<Array<Scalars['ID']>>
  description?: InputMaybe<Scalars['String']>
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  parent_ids?: InputMaybe<Array<Scalars['ID']>>
}

export interface TagDestroyInput {
  id: Scalars['ID']
}

export interface TagFilterType {
  AND?: InputMaybe<TagFilterType>
  NOT?: InputMaybe<TagFilterType>
  OR?: InputMaybe<TagFilterType>
  /** Filter by tag aliases */
  aliases?: InputMaybe<StringCriterionInput>
  /** Filter by number f child tags the tag has */
  child_count?: InputMaybe<IntCriterionInput>
  /** Filter by child tags */
  children?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>
  /** Filter by tag description */
  description?: InputMaybe<StringCriterionInput>
  /** Filter by number of galleries with this tag */
  gallery_count?: InputMaybe<IntCriterionInput>
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  /** Filter by number of images with this tag */
  image_count?: InputMaybe<IntCriterionInput>
  /** Filter to only include tags missing this property */
  is_missing?: InputMaybe<Scalars['String']>
  /** Filter by number of markers with this tag */
  marker_count?: InputMaybe<IntCriterionInput>
  /** Filter by tag name */
  name?: InputMaybe<StringCriterionInput>
  /** Filter by number of parent tags the tag has */
  parent_count?: InputMaybe<IntCriterionInput>
  /** Filter by parent tags */
  parents?: InputMaybe<HierarchicalMultiCriterionInput>
  /** Filter by number of performers with this tag */
  performer_count?: InputMaybe<IntCriterionInput>
  /** Filter by number of scenes with this tag */
  scene_count?: InputMaybe<IntCriterionInput>
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>
}

export interface TagUpdateInput {
  aliases?: InputMaybe<Array<Scalars['String']>>
  child_ids?: InputMaybe<Array<Scalars['ID']>>
  description?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  parent_ids?: InputMaybe<Array<Scalars['ID']>>
}

export interface TagsMergeInput {
  destination: Scalars['ID']
  source: Array<Scalars['ID']>
}

export interface TimestampCriterionInput {
  modifier: CriterionModifier
  value: Scalars['String']
  value2?: InputMaybe<Scalars['String']>
}

export interface Version {
  __typename?: 'Version'
  build_time: Scalars['String']
  hash: Scalars['String']
  version?: Maybe<Scalars['String']>
}

export interface VideoCaption {
  __typename?: 'VideoCaption'
  caption_type: Scalars['String']
  language_code: Scalars['String']
}

export type VideoFile = BaseFile & {
  __typename?: 'VideoFile'
  audio_codec: Scalars['String']
  basename: Scalars['String']
  bit_rate: Scalars['Int']
  created_at: Scalars['Time']
  duration: Scalars['Float']
  fingerprints: Fingerprint[]
  format: Scalars['String']
  frame_rate: Scalars['Float']
  height: Scalars['Int']
  id: Scalars['ID']
  mod_time: Scalars['Time']
  parent_folder_id: Scalars['ID']
  path: Scalars['String']
  size: Scalars['Int64']
  updated_at: Scalars['Time']
  video_codec: Scalars['String']
  width: Scalars['Int']
  zip_file_id?: Maybe<Scalars['ID']>
}

export interface StashPerformerFieldsFragment {
  __typename?: 'Performer'
  id: string
  name?: string | null
  aliases?: string | null
  measurements?: string | null
  twitter?: string | null
  instagram?: string | null
  photo?: string | null
  hasFakeBoobs?: string | null
  isFavorite: boolean
  sceneCount?: number | null
}

export type AllPerformersQueryVariables = Exact<Record<string, never>>

export interface AllPerformersQuery {
  __typename?: 'Query'
  allPerformers: Array<{
    __typename?: 'Performer'
    id: string
    name?: string | null
    aliases?: string | null
    measurements?: string | null
    twitter?: string | null
    instagram?: string | null
    photo?: string | null
    hasFakeBoobs?: string | null
    isFavorite: boolean
    sceneCount?: number | null
  }>
}

export type FindPerformerQueryVariables = Exact<{
  id: Scalars['ID']
}>

export interface FindPerformerQuery {
  __typename?: 'Query'
  findPerformer?: {
    __typename?: 'Performer'
    id: string
    name?: string | null
    aliases?: string | null
    measurements?: string | null
    twitter?: string | null
    instagram?: string | null
    photo?: string | null
    hasFakeBoobs?: string | null
    isFavorite: boolean
    sceneCount?: number | null
  } | null
}

export const StashPerformerFieldsFragmentDoc = gql`
  fragment StashPerformerFields on Performer {
    id
    name
    aliases
    photo: image_path
    measurements
    hasFakeBoobs: fake_tits
    twitter
    instagram
    isFavorite: favorite
    sceneCount: scene_count
  }
`
export const AllPerformersDocument = gql`
  query allPerformers {
    allPerformers {
      ...StashPerformerFields
    }
  }
  ${StashPerformerFieldsFragmentDoc}
`
export const FindPerformerDocument = gql`
  query findPerformer($id: ID!) {
    findPerformer(id: $id) {
      ...StashPerformerFields
    }
  }
  ${StashPerformerFieldsFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = async (action, _operationName, _operationType) => await action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
): {
  allPerformers: (
    variables?: AllPerformersQueryVariables,
    requestHeaders?: Dom.RequestInit['headers']
  ) => Promise<AllPerformersQuery>
  findPerformer: (
    variables: FindPerformerQueryVariables,
    requestHeaders?: Dom.RequestInit['headers']
  ) => Promise<FindPerformerQuery>
} {
  return {
    async allPerformers(
      variables?: AllPerformersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<AllPerformersQuery> {
      return await withWrapper(
        async wrappedRequestHeaders =>
          await client.request<AllPerformersQuery>(AllPerformersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'allPerformers',
        'query'
      )
    },
    async findPerformer(
      variables: FindPerformerQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<FindPerformerQuery> {
      return await withWrapper(
        async wrappedRequestHeaders =>
          await client.request<FindPerformerQuery>(FindPerformerDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders
          }),
        'findPerformer',
        'query'
      )
    }
  }
}
export type Sdk = ReturnType<typeof getSdk>
