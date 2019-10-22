import auditor

from events.registry import experiment_group

auditor.subscribe(experiment_group.ExperimentGroupCreatedEvent)
auditor.subscribe(experiment_group.ExperimentGroupUpdatedEvent)
auditor.subscribe(experiment_group.ExperimentGroupDeletedEvent)
auditor.subscribe(experiment_group.ExperimentGroupViewedEvent)
auditor.subscribe(experiment_group.ExperimentGroupArchivedEvent)
auditor.subscribe(experiment_group.ExperimentGroupRestoredEvent)
auditor.subscribe(experiment_group.ExperimentGroupBookmarkedEvent)
auditor.subscribe(experiment_group.ExperimentGroupUnBookmarkedEvent)
auditor.subscribe(experiment_group.ExperimentGroupStoppedEvent)
auditor.subscribe(experiment_group.ExperimentGroupResumedEvent)
auditor.subscribe(experiment_group.ExperimentGroupSucceededEvent)
auditor.subscribe(experiment_group.ExperimentGroupFailedEvent)
auditor.subscribe(experiment_group.ExperimentGroupDoneEvent)
auditor.subscribe(experiment_group.ExperimentGroupNewStatusEvent)
auditor.subscribe(experiment_group.ExperimentGroupExperimentsViewedEvent)
auditor.subscribe(experiment_group.ExperimentGroupStatusesViewedEvent)
auditor.subscribe(experiment_group.ExperimentGroupMetricsViewedEvent)
auditor.subscribe(experiment_group.ExperimentGroupIterationEvent)
auditor.subscribe(experiment_group.ExperimentGroupRandomEvent)
auditor.subscribe(experiment_group.ExperimentGroupGridEvent)
auditor.subscribe(experiment_group.ExperimentGroupHyperbandEvent)
auditor.subscribe(experiment_group.ExperimentGroupBOEvent)
auditor.subscribe(experiment_group.ExperimentGroupDeletedTriggeredEvent)
auditor.subscribe(experiment_group.ExperimentGroupStoppedTriggeredEvent)
auditor.subscribe(experiment_group.ExperimentGroupResumedTriggeredEvent)