import { Component } from '@angular/core';
import { LoggingService } from '../../shared/services/logging/logging.service';
import { LogLevel } from '../../shared/services/logging/log-level.enum';

/**
 * Demonstrates how to use the logging service.
 */
@Component({
  selector: 'app-logging',
  templateUrl: 'logging.component.html',
})
export class LoggingComponent {

  /**
   * Log level keys for the select log level element.
   */
  logLevelKeys: string[] = [];

  /**
   * Log level labels for the select log level element.
   */
  logLevelLabels: string[] = [];
  
  /**
   * The current log level.
   */
  logLevel: LogLevel = LogLevel.Info;
  
  /**
   * Constructs this component from the supplied LoggingService.
   * @param loggingService The LoggingService instance.
   */
  constructor(private loggingService: LoggingService) {
    // Split the original enumeration of log levels into keys and labels to be used in the log level select element.
    const logLevelEnumArray = Object.keys(LogLevel);
    this.logLevelKeys = logLevelEnumArray.slice(0, logLevelEnumArray.length / 2);
    this.logLevelLabels = logLevelEnumArray.slice(logLevelEnumArray.length / 2);
  }

  /**
   * Sets the new log level.
   * @param event The change event.
   */
  onChangeLogLevel(event: any) {
    this.loggingService.setLogLevel(+event.target.value);
  }

  /**
   * Logs a message at trace level.
   */
  onTrace() {
    this.loggingService.trace('Trace message');
  }

  /**
   * Logs a message at info level.
   */
  onInfo() {
    this.loggingService.info('Info message');
  }

  /**
   * Logs a message at warning level.
   */
  onWarning() {
    this.loggingService.warning('Warning message');
  }

  /**
   * Logs a message at error level.
   */
  onError() {
    this.loggingService.error('Error message');
  }

  /**
   * Logs a message at fatal level.
   */
  onFatal() {
    this.loggingService.fatal('Fatal message');
  }
}
